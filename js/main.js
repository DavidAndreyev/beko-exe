document.addEventListener('DOMContentLoaded',()=>{
 buildGalleries();let step=0,teaseCount=0;const screens=[...document.querySelectorAll('.screen')];
 function show(n){step=Math.max(0,Math.min(6,n));screens.forEach((s,i)=>s.classList.toggle('active',i===step));document.querySelector('#progress').textContent=`${String(step+1).padStart(2,'0')} / 07`;window.scrollTo({top:0,behavior:'instant'});if(step!==6)HockeyAnimation.reset();if(step===5)placeNo();}
 document.querySelectorAll('.next').forEach(b=>b.addEventListener('click',()=>show(step+1)));
 document.querySelectorAll('.prev').forEach(b=>b.addEventListener('click',()=>show(step-1)));
 document.querySelector('#yes').addEventListener('click',()=>{show(6);HockeyAnimation.start();});
 document.querySelector('#restart').addEventListener('click',()=>show(0));
 document.querySelector('#share').addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:'BEKO.EXE',url:location.href});else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);alert('Link copiado!');}else prompt('Copia o link:',location.href);}catch(e){if(e.name!=='AbortError')console.warn(e);}});
 const no=document.querySelector('#no'),area=document.querySelector('#answerArea'),tease=document.querySelector('#tease');
 function placeNo(){no.style.left='';no.style.top='';no.style.transform='';no.style.position='absolute';no.style.left='70%';no.style.top='55%';}
 function escapeNo(){if(step!==5)return;const bounds=area.getBoundingClientRect(),w=no.offsetWidth,h=no.offsetHeight;const yes=document.querySelector('#yes').getBoundingClientRect();let x=0,y=0;
  for(let i=0;i<35;i++){x=8+Math.random()*Math.max(0,bounds.width-w-16);y=8+Math.random()*Math.max(0,bounds.height-h-16);const r={left:bounds.left+x,right:bounds.left+x+w,top:bounds.top+y,bottom:bounds.top+y+h};if(r.right<yes.left-12||r.left>yes.right+12||r.bottom<yes.top-12||r.top>yes.bottom+12)break;}
  no.style.left=`${x}px`;no.style.top=`${y}px`;tease.textContent=SITE_CONFIG.frasesNao[teaseCount++%SITE_CONFIG.frasesNao.length];
 }
 no.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')escapeNo();});
 no.addEventListener('pointerdown',e=>{e.preventDefault();escapeNo();});
 no.addEventListener('click',e=>{e.preventDefault();escapeNo();});
 no.addEventListener('focus',escapeNo);
 window.addEventListener('resize',()=>{if(step===5)placeNo();});
 const lines=['> A iniciar BEKO.EXE...','> A procurar BEKO...','> Utilizador encontrado.','> A carregar memórias...','> Sistema pronto.'];const terminal=document.querySelector('#terminal');let i=0;function addLine(){if(i>=lines.length)return;const div=document.createElement('div');div.textContent=lines[i++];terminal.append(div);setTimeout(addLine,330);}addLine();
});
