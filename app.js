"use strict";
// Deliberately session-only: no storage or network writes.
const $ = selector => document.querySelector(selector);
const state = {belt:{done:new Set(),open:new Set(),remaining:false,map:""},relics:{done:new Set(),open:new Set(),remaining:false,map:""}};
let mode="belt";
const beltItems = BELT_WEAPONS.map(([name,location],i)=>({id:`weapon-${i+1}`,name,location}));
const maps = [...new Set(RELICS.map(item=>item.map))];
maps.forEach(name=>{const option=document.createElement("option");option.value=name;option.textContent=name;$("#map").append(option);});
function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
function section(parent,title,text){parent.append(node("h3",title),node("p",text));}
function guideFor(item){
 const guide=node("div",undefined,"guide");
 if(mode==="belt"){
  section(guide,"Location",item.location);
  section(guide,"Completion requirement",`Get 50 qualifying kills with ${item.name}. Mark complete manually when finished.`);
  section(guide,"Before starting","Pick up the Mister Peeks magazine at the lighthouse before collecting the Jotunn Star. All 18 weapon requirements must be completed in the same run.");
  section(guide,"What counts",item.name==="Jotunn Star"?"Use the Jotunn Star for its own 50-kill requirement.":"Buy this weapon from its wall-buy. Mystery Box copies, equipment, traps, underbarrels, and ammo-mod kills do not count toward its direct weapon kills. Allow a small buffer above 50.");
  if(item.name==="Warden 309")section(guide,"Name discrepancy","The existing tracker calls this Warden 309; the reference guide calls the Tyr’s Foot wall-buy Warden 308. The original tracker label has been preserved: check the in-game wall label.");
  section(guide,"After all weapons","Listen for Mister Peeks, then look for the trial portal near the Arsenal in Eidskallen Square. Checklist completion alone does not mean the relic has been unlocked.");
 }else{
  section(guide,"Effect when equipped",item.effect);
  section(guide,"Prerequisites",`Play Cursed mode after completing the map’s main quest. ${item.tier==="Sinister"?"Start at Cursed Tier I or higher.":item.tier==="Wicked"?"Start at Cursed Tier II or higher.":"Follow the round requirement in the unlock route below."} Complete the quest and its trial in one session.`);
  guide.append(node("h3","Unlock route"));const steps=node("ol");item.steps.forEach(text=>steps.append(node("li",text)));guide.append(steps);
  section(guide,"When to check this off","Mark the relic complete after winning its trial and receiving the unlock, not merely after opening the portal.");
 }
 const link=node("a","Open reference walkthrough ↗");link.href=mode==="belt"?"https://timesaver.gg/blog/bo7-best-friends-camo-all-30-relics-checklist":item.source;link.target="_blank";link.rel="noopener noreferrer";guide.append(link);return guide;
}
function collection(){return mode==="belt"?beltItems:RELICS;}
function update(){
 const s=state[mode],items=collection(),count=s.done.size,total=items.length;
 $("#progress-text").textContent=`${count}/${total} completed`;
 $("#percent").textContent=`${Math.round(count/total*100)}%`;
 $("#progress").max=total;$("#progress").value=count;
 $("#progress").setAttribute("aria-label",`${mode==="belt"?"Belt weapon":"Relic unlock"} completion, all maps`);
 $("#reset").disabled=count===0;
 document.body.classList.toggle("complete",count===total);
 $("#status").textContent=count===total?"Checklist complete — verify your unlock in game!":`${total-count} ${mode==="belt"?"weapons":"relics"} remaining. Progress shown is for the entire selected tracker.`;
 let visible=0;
 document.querySelectorAll(".item").forEach(card=>{const id=card.dataset.id,done=s.done.has(id);card.classList.toggle("done",done);card.querySelector("input").checked=done;card.hidden=(s.remaining&&done)||(mode==="relics"&&s.map&&card.dataset.map!==s.map);if(!card.hidden)visible++;});
 $("#empty").hidden=visible!==0;
}
function render(){
 const s=state[mode];$("#items").replaceChildren();
 $("#heading").textContent=mode==="belt"?"🏆 Relic Belt Tracker":"💎 All Relics Tracker";
 $("#intro").textContent=mode==="belt"?"Check off each weapon after its required kills. Expand an entry for location and instructions.":"Track all 30 tiered relic unlocks. Expand an entry for its effect, prerequisites, and unlock route.";
 $("#belt-mode").setAttribute("aria-pressed",String(mode==="belt"));$("#relics-mode").setAttribute("aria-pressed",String(mode==="relics"));
 $("#map-control").hidden=mode!=="relics";$("#guide-note").hidden=mode!=="relics";$("#remaining").checked=s.remaining;$("#map").value=s.map;
 collection().forEach((item,i)=>{
  const card=node("article",undefined,"item");card.dataset.id=item.id;card.dataset.map=item.map||"";
  const top=node("div",undefined,"item-top"),label=node("label",undefined,"item-label"),input=node("input");input.type="checkbox";input.id=item.id;
  const text=node("span");text.append(node("span",`${String(i+1).padStart(2,"0")}. ${item.name}`,"item-name"),node("span",mode==="belt"?item.location:`${item.map} · ${item.tier}`,"subtitle"));label.append(input,text);top.append(label);
  const details=node("details");details.open=s.open.has(item.id);const summary=node("summary");summary.append(node("span","View description & instructions","open"),node("span","Hide description & instructions","close"));details.append(summary,guideFor(item));
  details.addEventListener("toggle",()=>{if(details.open)s.open.add(item.id);else s.open.delete(item.id);});
  input.addEventListener("change",()=>{if(input.checked)s.done.add(item.id);else s.done.delete(item.id);update();if(card.hidden){const next=[...document.querySelectorAll(".item")].find(el=>!el.hidden);(next?next.querySelector("input"):$("#remaining")).focus();}});
  card.append(top,details);$("#items").append(card);
 });update();
}
$("#belt-mode").addEventListener("click",()=>{mode="belt";render();});
$("#relics-mode").addEventListener("click",()=>{mode="relics";render();});
$("#remaining").addEventListener("change",event=>{state[mode].remaining=event.target.checked;update();});
$("#map").addEventListener("change",event=>{state[mode].map=event.target.value;update();});
$("#reset").addEventListener("click",()=>{if(window.confirm(`Reset ALL ${mode==="belt"?"belt weapon":"relic unlock"} checkboxes in this tracker, including filtered-out entries? The other tracker is unchanged.`)){state[mode].done.clear();update();}});
window.addEventListener("pageshow",event=>{if(event.persisted){Object.values(state).forEach(s=>{s.done.clear();s.open.clear();s.remaining=false;s.map="";});mode="belt";render();}});
render();
