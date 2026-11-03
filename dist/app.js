const data={glas:{n:'01 / GLAS- & FENSTERREINIGUNG',title:'Klare Sicht. Bis ins Detail.',text:'Saubere Glasflächen bringen Licht in Ihre Räume und unterstreichen den Charakter Ihrer Immobilie. Der Leistungsumfang wird nach Glasart, Verschmutzung und Zugänglichkeit abgestimmt.',items:['Fenster und Verglasungen innen und außen','Rahmen- und Falzreinigung nach Vereinbarung','Glasfassaden, Schaufenster und Eingangsanlagen','Wintergärten und größere Glasflächen nach Objektprüfung'],note:'Für Ihre Anfrage: Anzahl oder Fläche der Fenster, Arbeitshöhe und Zugänglichkeit helfen bei der Planung.',select:'Glas- & Fensterreinigung'},unterhalt:{n:'02 / UNTERHALTSREINIGUNG',title:'Ein guter Eindruck. Jeden Tag.',text:'Regelmäßige Reinigung hält Ihre Räume gepflegt und schafft ein angenehmes Umfeld für Beschäftigte, Kunden und Besucher. Die einzelnen Aufgaben werden in einem passenden Leistungsverzeichnis festgelegt.',items:['Büro- und Gewerbeflächen','Sanitärbereiche und Teeküchen','Bodenpflege und Reinigung freier Oberflächen','Gemeinschafts-, Eingangs- und Verkehrsflächen'],note:'Zeiten, Intervalle und sensible Bereiche stimmen wir auf Ihre Betriebsabläufe ab.',select:'Unterhaltsreinigung'},bau:{n:'03 / BAUREINIGUNG',title:'Platz für den nächsten Schritt.',text:'Nach Umbau, Modernisierung oder Neubau braucht es einen sauberen Übergang zur Nutzung. Art und Umfang der Reinigung richten sich nach dem Baufortschritt und den vorhandenen Materialien.',items:['Baubegleitende Reinigung','Baufein- und Bauendreinigung','Entfernung baubedingter Verschmutzungen nach Prüfung','Reinigung von Böden, Oberflächen und Verglasungen'],note:'Hartnäckige Rückstände und empfindliche Materialien werden vor der Ausführung gemeinsam beurteilt.',select:'Baureinigung'},grund:{n:'04 / GRUND- & BODENREINIGUNG',title:'Frische für beanspruchte Flächen.',text:'Wo die regelmäßige Reinigung an ihre Grenzen kommt, kann eine intensive Grundreinigung sinnvoll sein. Entscheidend sind der Belag, sein Zustand und die bisherige Pflege.',items:['Intensive Reinigung geeigneter Bodenbeläge','Bearbeitung stärker beanspruchter Flächen','Materialgerechte Reinigung von Randbereichen','Abstimmung geeigneter Pflegeverfahren'],note:'Beschichtungen und besondere Pflegeleistungen werden abhängig vom Belag separat abgestimmt.',select:'Grund- & Bodenreinigung'},treppe:{n:'05 / TREPPENHAUSREINIGUNG',title:'Willkommen. Auf jeder Etage.',text:'Treppenhäuser und Eingänge prägen den ersten Eindruck eines Hauses. Ein abgestimmter Reinigungsplan berücksichtigt Nutzung, Materialien und die vereinbarten Gemeinschaftsflächen.',items:['Treppenstufen und Podeste','Handläufe und Geländer','Eingangsbereiche und gemeinschaftliche Flure','Weitere Kontaktflächen nach Vereinbarung'],note:'Nennen Sie uns Anzahl der Aufgänge, Etagen und den gewünschten Rhythmus.',select:'Treppenhausreinigung'},sonder:{n:'06 / SONDERREINIGUNG',title:'Besondere Aufgaben verdienen Aufmerksamkeit.',text:'Manche Reinigungsaufgaben passen in keinen Standardplan. Beschreiben Sie uns die Fläche, das Material und die Verschmutzung. Nach Prüfung lässt sich ein geeignetes Vorgehen abstimmen.',items:['Anlassbezogene Intensivreinigung','Schwer zugängliche Flächen nach Prüfung','Reinigung vor Übergaben oder Wiedereröffnung','Individuelle Aufgaben außerhalb der Regelreinigung'],note:'Spezialverfahren, notwendige Ausrüstung und die Machbarkeit werden objektspezifisch geklärt.',select:'Sonderreinigung'}};
const dialog=document.querySelector('#detail'),content=document.querySelector('#dialog-content');
function show(html){content.innerHTML=html;dialog.showModal()}
document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>{const d=data[b.dataset.service];show(`<p class="eyebrow">${d.n}</p><h2>${d.title}</h2><p>${d.text}</p><ul>${d.items.map(i=>`<li>${i}</li>`).join('')}</ul><p>${d.note}</p><button class="button" id="choose-service">Diese Leistung anfragen <span>↗</span></button>`);document.querySelector('#choose-service').onclick=()=>{document.querySelector('#service').value=d.select;dialog.close();document.querySelector('#anfrage').scrollIntoView({behavior:'smooth'});document.querySelector('#service').focus({preventScroll:true})}}));
document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');menu.textContent=open?'×':'☰'};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'});
document.querySelectorAll('[data-legal]').forEach(b=>b.onclick=()=>show(b.dataset.legal==='impressum'?'<p class="eyebrow">ANBIETER DIESER WEBSITE</p><h2>Impressum</h2><p><strong>SR Bau GmbH</strong><br>Mädewalder Weg 2<br>12621 Berlin</p><h3>Vertreten durch</h3><p>Geschäftsführer: Steve Risch</p><h3>Kontakt</h3><p>Telefon: <a href="tel:+4915155676584">+49 1515 5676584</a><br>E-Mail: <a href="mailto:info@srbauunternehmen.de">info@srbauunternehmen.de</a></p><h3>Umsatzsteuer-ID</h3><p>DE341847196</p>':'<p class="eyebrow">WEBSITE-ENTWURF</p><h2>Datenschutz</h2><p>Diese Website bindet keine Analyse- oder Marketingdienste ein. Bilder, Schriften und Skripte werden von der Website selbst geladen. Ihre Eingaben in der Objektanfrage werden nur im Browser verarbeitet und erst auf Ihren Wunsch als Textdatei heruntergeladen. Sie werden durch das Formular nicht an SR übermittelt.</p><p>Die Verarbeitung durch die Hostingplattform unterliegt deren Datenschutzbestimmungen. Vor dem regulären öffentlichen Betrieb werden die Angaben zum Verantwortlichen, zum Hosting, zu Rechtsgrundlagen und Betroffenenrechten ergänzt.</p>'));
let fileUrl;document.querySelector('#request')?.addEventListener('submit',e=>{e.preventDefault();const get=id=>document.getElementById(id).value;const text=`OBJEKTANFRAGE – SR GEBÄUDEREINIGUNG GMBH\n\nLeistung: ${get('service')}\nObjektart: ${get('object')}\nRhythmus: ${get('frequency')}\nOrt: ${get('place')}\n\nDetails:\n${get('message')||'Keine weiteren Angaben'}\n\nDiese Anfrage wurde lokal zusammengestellt und noch nicht versendet.\n`;if(fileUrl)URL.revokeObjectURL(fileUrl);fileUrl=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const result=document.querySelector('#result');result.hidden=false;result.replaceChildren();const t=document.createElement('strong');t.textContent='Ihre Zusammenfassung ist bereit. Noch nicht versendet.';const a=document.createElement('a');a.href=fileUrl;a.download='SR-Objektanfrage.txt';a.textContent='Zusammenfassung herunterladen ↓';result.append(t,a)});document.querySelector('#year').textContent=new Date().getFullYear();

const requested=new URLSearchParams(location.search).get("leistung");const choices={"glas": "Glas- & Fensterreinigung", "unterhalt": "Unterhaltsreinigung", "bau": "Baureinigung", "grund": "Grund- & Bodenreinigung", "treppe": "Treppenhausreinigung", "sonder": "Sonderreinigung", "fassade": "Fassadenreinigung", "teppich": "Teppich- & Polsterreinigung", "praxis": "Praxis- & Hygienereinigung", "industrie": "Industrie- & Hallenreinigung", "aussen": "Außenflächenreinigung", "solar": "Photovoltaikreinigung"};if(requested&&choices[requested]&&document.querySelector("#service"))document.querySelector("#service").value=choices[requested];

(() => {
 const video=document.querySelector('#hero-video');
 const control=document.querySelector('.video-toggle');
 if(!video||!control)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 video.muted=true;
 function update(){control.textContent=video.paused?'▶ Video abspielen':'Ⅱ Video pausieren';control.setAttribute('aria-label',video.paused?'Hintergrundvideo abspielen':'Hintergrundvideo pausieren');}
 function play(){video.play().catch(update);}
 if(reduced.matches){video.autoplay=false;video.pause();}else{play();}
 update();video.addEventListener('play',update);video.addEventListener('pause',update);
 control.addEventListener('click',()=>{if(video.paused)play();else video.pause();});
 reduced.addEventListener('change',event=>{if(event.matches)video.pause();});
})();

// One-way cleaning: scrolling back never restores areas already wiped.
(() => {
 const wide=matchMedia('(min-width:1401px)');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const canvas=document.createElement('canvas');
 canvas.id='foam-backdrop';canvas.setAttribute('aria-hidden','true');
 document.body.prepend(canvas);
 const ctx=canvas.getContext('2d');if(!ctx){canvas.remove();return;}
 let w=0,h=0,gutter=0,highWater=0,last=0,frame=0,activeTime=0;
 const bubbles=Array.from({length:90},(_,i)=>({x:((i*73)%101)/101,y:((i*47)%97)/97,r:4+(i*13)%19,s:.3+(i%5)*.12}));
 function progress(){
  const range=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  highWater=Math.max(highWater,Math.min(1,scrollY/range));
 }
 function resize(){
  w=innerWidth;h=innerHeight;gutter=Math.max(0,(document.documentElement.clientWidth-1280)/2);
  const dpr=Math.min(devicePixelRatio||1,2);
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  progress();restart();
 }
 function render(time){
  frame=0;
  if(!wide.matches||reduced.matches||document.hidden)return;
  if(time-last<42){frame=requestAnimationFrame(render);return;}
  activeTime+=Math.min(time-last,60);last=time;
  ctx.clearRect(0,0,w,h);
  const edge=highWater*(h+100)-50;
  if(highWater>=.999)return;
  for(const side of [0,1]){
   const x=side===0?0:document.documentElement.clientWidth-gutter;
   ctx.save();ctx.beginPath();ctx.rect(x,Math.max(0,edge),gutter,h);ctx.clip();
   const wash=ctx.createLinearGradient(0,0,0,h);wash.addColorStop(0,'rgba(212,231,234,.14)');wash.addColorStop(1,'rgba(225,238,239,.05)');
   ctx.fillStyle=wash;ctx.fillRect(x,0,gutter,h);
   for(const b of bubbles){
    const y=(b.y*(h+90)+activeTime*.003*b.s)%(h+90)-40;
    const bx=x+b.x*gutter;
    ctx.beginPath();ctx.arc(bx,y,b.r,0,Math.PI*2);ctx.fillStyle='rgba(240,247,248,.26)';ctx.fill();
    ctx.lineWidth=.7;ctx.strokeStyle='rgba(166,199,205,.13)';ctx.stroke();
    ctx.beginPath();ctx.arc(bx-b.r*.22,y-b.r*.2,b.r*.55,3.5,5.2);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.stroke();
   }
   ctx.restore();
   if(highWater>.005&&edge>0&&edge<h-10){
    // Small, lightly drawn squeegee follows the irreversible cleaning edge.
    const size=Math.min(52,gutter*.55),cx=x+gutter/2;
    ctx.save();ctx.translate(cx,edge);ctx.rotate(-.12);
    ctx.globalAlpha=.28;ctx.lineCap='round';
    ctx.strokeStyle='#83979b';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-size/2,0);ctx.lineTo(size/2,0);ctx.stroke();
    ctx.strokeStyle='#e8b42e';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(0,4);ctx.lineTo(0,22);ctx.stroke();ctx.restore();
   }
  }
  frame=requestAnimationFrame(render);
 }
 function restart(){if(frame)cancelAnimationFrame(frame);frame=0;last=performance.now();if(wide.matches&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(render);else ctx.clearRect(0,0,w,h);}
 addEventListener('scroll',()=>{progress();if(!frame&&highWater<.999)restart();},{passive:true});
 addEventListener('resize',resize,{passive:true});
 wide.addEventListener('change',restart);reduced.addEventListener('change',restart);
 document.addEventListener('visibilitychange',restart);resize();
})();
