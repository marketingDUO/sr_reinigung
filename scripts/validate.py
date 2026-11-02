from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path('dist');errors=[]
class Validator(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for key,value in attrs:
   if key not in ('src','href') or not value:continue
   url=urlsplit(value)
   if url.scheme or url.netloc or not url.path:continue
   target=root/unquote(url.path.lstrip('/')) if url.path.startswith('/') else current.parent/unquote(url.path)
   if target.is_dir():target=target/'index.html'
   if not target.exists():errors.append(f'{current}: missing {value}')
assert (root/'index.html').is_file()
for current in root.rglob('*.html'):Validator().feed(current.read_text())
if errors:raise SystemExit('\n'.join(errors))
print('Alle lokalen Seiten, Links und Assets geprüft.')
