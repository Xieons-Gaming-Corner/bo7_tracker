from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
SCRIPT = '<script id="darkops-artwork-update">\n(()=>{\'use strict\';\nconst files=["ActionHero", "Anathema", "AnotherRound", "ArachnidEnthusiast", "ArmedToTheTeeth", "Astronomical", "Blitzed", "BossRush", "BoxAddict", "Chronomancer", "Conqueror", "Countdown", "DailyTot", "Deicide", "Domineering", "Doomstick", "Echoes", "Epidemic", "FlushedForCash", "HarbingerOfDoom", "HardMode", "Ingenuity", "Invincible", "KaijuuDigIt", "Lucidity", "ManekiMecha", "MartialArtist", "MythicCyniv", "Neutronomic", "NewMain", "ReadyForPublishing", "Relativity", "Reliquary", "SeriousMonkeyBusiness", "Shogun", "Showboat", "SocialDistancing", "TheBomba", "TheOne", "TheReunion", "TheUsualPlease", "Torchbearer", "TutusMortuorum", "VoidCaller", "ZombiesDarkOpsMaster"];\nconst normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,\'\');\nconst artwork=new Map(files.map(file=>[normalize(file),file]));\nartwork.set(\'mythiccynic\',\'MythicCyniv\');\nfunction image(file,name){const img=document.createElement(\'img\');img.className=\'darkops-artwork\';img.src=\'./assets/dark%20ops/\'+encodeURIComponent(file)+\'.webp\';img.alt=name+\' calling card\';img.loading=\'lazy\';img.decoding=\'async\';img.addEventListener(\'error\',()=>{img.hidden=true;},{once:true});return img;}\nfunction update(){\nconst root=document.getElementById(\'darkops-items\');if(!root)return;\nroot.querySelectorAll(\'.item\').forEach(card=>{\nif(card.querySelector(\'.darkops-artwork\'))return;\nconst label=card.querySelector(\'.name\');if(!label)return;\nconst name=label.textContent.trim();const file=artwork.get(normalize(name));\nif(file)card.prepend(image(file,name));\n});\nconst master=document.getElementById(\'darkops-master\');\nif(master&&!master.previousElementSibling?.classList.contains(\'darkops-mastery-artwork\')){\nconst img=image(\'ZombiesDarkOpsMaster\',\'Zombies Dark Ops Master\');img.classList.add(\'darkops-mastery-artwork\');master.before(img);\n}\nconst notice=document.querySelector(\'#darkops-panel > .notice\');\nif(notice)notice.textContent=notice.textContent.replace(\'No calling-card artwork is included.\',\'Calling-card artwork is loaded from the local Dark Ops assets.\');\n}\nfunction start(){const root=document.getElementById(\'darkops-items\');if(!root)return;update();new MutationObserver(update).observe(root,{childList:true});}\nif(document.readyState===\'loading\')document.addEventListener(\'DOMContentLoaded\',start,{once:true});else start();\n})();\n</script>'
STYLE = '<style id="darkops-artwork-style">\n#darkops-panel .darkops-artwork{display:block;width:min(100%,480px);height:auto;object-fit:contain;margin:0 0 16px;border:1px solid var(--line,#394865);border-radius:9px;background:#11192a}\n#darkops-panel .darkops-mastery-artwork{margin-top:16px}\n#darkops-panel .darkops-artwork[hidden]{display:none}\n@media(max-width:550px){#darkops-panel .darkops-artwork{width:100%;margin-bottom:12px}}\n</style>'

def patch(path):
    original = path.read_text(encoding="utf-8")
    if 'id="darkops-panel"' not in original:
        raise RuntimeError(f"Dark Ops panel not found in {path.name}")
    updated = re.sub(r'<script id="darkops-artwork-update">.*?</script>', '', original, flags=re.S)
    updated = re.sub(r'<style id="darkops-artwork-style">.*?</style>', '', updated, flags=re.S)
    if '</head>' not in updated or '</body>' not in updated:
        raise RuntimeError(f"Missing HTML insertion points in {path.name}")
    updated = updated.replace('</head>', STYLE + '\n</head>', 1)
    updated = updated.replace('</body>', SCRIPT + '\n</body>', 1)
    backup = path.with_name(path.name + '.darkops-artwork.bak')
    if not backup.exists():
        backup.write_text(original, encoding="utf-8")
    path.write_text(updated, encoding="utf-8")
    print(f"Updated {path.name}; original backed up as {backup.name}")

if __name__ == '__main__':
    targets = [ROOT / 'index.html']
    alternate = ROOT / 'index (2).html'
    if alternate.exists():
        targets.append(alternate)
    for target in targets:
        patch(target)