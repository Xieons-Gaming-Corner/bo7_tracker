"""Run beside your current index.html: python add_operator_skins.py"""
from pathlib import Path
import re
import shutil
#gitignore
root = Path(__file__).resolve().parent
page = root / "index.html"
addon = root / "operator-skins.js"
if not page.is_file() or not addon.is_file():
    raise SystemExit("Put this installer and operator-skins.js beside your current index.html, then run again.")
content = page.read_text(encoding="utf-8")
if 'data-xgc-operator-skins' in content:
    raise SystemExit("Operator skins already installed. No changes made.")
for element in ('items', 'belt-mode', 'relics-mode', 'heading', 'intro', 'progress', 'remaining'):
    if not re.search(r"id=[\"']" + re.escape(element) + r"[\"']", content):
        raise SystemExit("Expected tracker element missing: " + element + ". No files changed.")
match = re.search(r'</body\s*>', content, re.I)
if not match:
    raise SystemExit("Closing body tag not found. No files changed.")
backup = root / 'index.before-skins.html'
if not backup.exists():
    shutil.copy2(page, backup)
code = addon.read_text(encoding='utf-8')
if '</script' in code.lower():
    raise SystemExit('Unexpected script terminator in add-on. No changes made.')
tag = '<script data-xgc-operator-skins>\n' + code + '\n</script>\n'
updated = content[:match.start()] + tag + content[match.start():]
page.write_text(updated, encoding='utf-8')
print('Updated index.html with embedded operator mode. Upload ONLY index.html; no extra script dependency is required. Backup: index.before-skins.html')
