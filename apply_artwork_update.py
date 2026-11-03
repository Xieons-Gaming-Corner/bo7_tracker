"""Run beside index.html and relic-artwork.js: python apply_artwork_update.py"""
from pathlib import Path
import shutil
import re

root = Path(__file__).resolve().parent
page = root / "index.html"
script = root / "relic-artwork.js"
if not page.is_file() or not script.is_file():
    raise SystemExit("Put this installer and relic-artwork.js beside your existing index.html, then run again.")
content = page.read_text(encoding="utf-8")
if not re.search(r'id=[\"\']items[\"\']', content):
    raise SystemExit("This patch needs the build 3 tracker with id=items. No files changed.")
marker = 'data-xgc-relic-artwork'
if marker in content:
    print("Artwork loader already installed. No index.html changes needed.")
else:
    match = re.search(r'</body\s*>', content, flags=re.I)
    if not match:
        raise SystemExit("No closing body tag found. No files changed.")
    backup = root / "index.before-artwork.html"
    if not backup.exists():
        shutil.copy2(page, backup)
    tag = '<script src="./relic-artwork.js?v=1" defer data-xgc-relic-artwork></script>\n'
    page.write_text(content[:match.start()] + tag + content[match.start():], encoding="utf-8")
    print("Updated index.html. Upload index.html and relic-artwork.js; keep assets/ and .nojekyll.")
