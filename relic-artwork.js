/* XGC optional relic artwork — additive to the existing tracker. */
(()=>{
 "use strict";
 if(window.__xgcRelicArtworkInstalled)return;
 window.__xgcRelicArtworkInstalled=true;
 const css=`
 .xgc-art-row{display:flex;gap:14px;align-items:flex-start;min-width:0}
 .xgc-art-row>.item-label{flex:1;min-width:0}
 .xgc-art-row .item-label>span{min-width:0;overflow-wrap:anywhere}
 .xgc-relic-art{display:block;width:76px;height:76px;object-fit:contain;flex:0 0 76px;background:rgba(0,0,0,.14);border-radius:10px;padding:5px}
 .xgc-tier{display:flex;flex-direction:column;align-items:center;gap:3px;flex:0 0 76px;margin:0;color:var(--muted,#bdc8df);font-size:.78rem;line-height:1.3;text-align:center}
 .xgc-portal-art{display:block;width:64px;height:64px;object-fit:contain}
 .xgc-relic-art[hidden],.xgc-portal-art[hidden]{display:none!important}
 @media(max-width:550px){.xgc-art-row{gap:8px}.xgc-relic-art{width:48px;height:56px;flex-basis:48px;padding:2px}.xgc-tier{flex-basis:52px;font-size:.72rem}.xgc-portal-art{width:48px;height:48px}}
 `;
 const aliases={
  'agarthan device':['Agarthan_Device','agarthan_device'],
  'matryoshka doll':['matryoshkadoll','matryoshka_doll'],
  'lawyers pen':['lawyers_pen','lawyer_s_pen','lawyer_pen'],
  'samanthas drawing':['samanthas_drawing','samantha_s_drawing','samantha_drawing'],
  'wrestling belt':['wrestling_belt','wrestlers_belt','wrestler_belt'],
  'civil protector head':['civil_protector_head','civil_protector']
 };
 function normalize(name){return name.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[’'‘]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
 function stems(name){const key=normalize(name),slug=key.replace(/ /g,'_');return [...new Set([...(aliases[key]||[]),slug])]}
 function relicPaths(name){return stems(name).flatMap(stem=>['webp','png'].map(ext=>`./assets/relics/relic_${stem}.${ext}`))}
 function portalPaths(tier){const names=tier==='Sinister'?['sinister','siniter']:[tier.toLowerCase()];return names.flatMap(name=>['png','webp'].map(ext=>`./assets/portals/${name}.${ext}`))}
 function artwork(paths,alt,className){
  const image=document.createElement('img');image.className=className;image.alt=alt;image.decoding='async';image.loading='eager';image.hidden=true;
  let attempt=0;
  image.addEventListener('load',()=>{image.hidden=false});
  image.addEventListener('error',()=>{image.hidden=true;if(attempt<paths.length)image.src=paths[attempt++];else image.removeAttribute('src')});
  image.src=paths[attempt++];return image;
 }
 function enhance(card){
  if(card.dataset.xgcArt==='ready')return;
  const label=card.querySelector('.item-label'),title=card.querySelector('.name, .item-name'),subtitle=card.querySelector('.subtitle');
  if(!label||!title||!subtitle)return;
  const tierMatch=subtitle.textContent.match(/\b(Grim|Sinister|Wicked)\b/i);
  if(!tierMatch)return; // Leave all belt weapon entries untouched.
  const tier=tierMatch[1][0].toUpperCase()+tierMatch[1].slice(1).toLowerCase();
  const name=card.dataset.name||title.textContent.replace(/^\s*\d+\.\s*/,'').trim();
  card.dataset.xgcArt='ready';
  const row=document.createElement('div');row.className='xgc-art-row';
  label.before(row);row.append(artwork(relicPaths(name),`${name} relic`,'xgc-relic-art'),label);
  const badge=document.createElement('figure');badge.className='xgc-tier';badge.setAttribute('aria-label',`${tier} relic difficulty`);
  const portal=artwork(portalPaths(tier),`${tier} portal`,'xgc-portal-art');
  const caption=document.createElement('figcaption');caption.textContent=tier;
  badge.append(portal,caption);row.append(badge);
 }
 function scan(root){if(root.nodeType!==1)return;if(root.matches('.item'))enhance(root);root.querySelectorAll('.item').forEach(enhance)}
 function init(){
  const host=document.getElementById('items');if(!host){console.warn('XGC artwork: #items was not found. Use the self-contained build 3 tracker.');return}
  const style=document.createElement('style');style.id='xgc-relic-art-style';style.textContent=css;document.head.append(style);
  scan(host);
  new MutationObserver(records=>{for(const record of records)for(const added of record.addedNodes)scan(added)}).observe(host,{childList:true,subtree:true});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
