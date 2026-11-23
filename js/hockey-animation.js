/* Animação SVG original, em coordenadas da pista (viewBox 720x380). */
const HockeyAnimation=(()=>{
 let frame=0, playing=false;
 const player=()=>document.querySelector('#player'), ball=()=>document.querySelector('#ball'), stick=()=>document.querySelector('#stick');
 function reset(){cancelAnimationFrame(frame);playing=false;player().setAttribute('transform','translate(-115 0)');ball().setAttribute('cx','133');ball().setAttribute('cy','307');stick().setAttribute('transform','rotate(0 148 248)');document.querySelector('#speed').setAttribute('opacity','0');document.querySelector('#goalTitle').textContent='É AGORA!';document.querySelector('#goalMessage').textContent='O Beko vai a jogo...';document.querySelector('#finalActions').hidden=true;document.querySelector('#goal').classList.remove('net-hit');}
 function finish(){playing=false;document.querySelector('#goalTitle').textContent='GOLOOOOO! 🏒';document.querySelector('#goalMessage').textContent='REMATE CERTEIRO!';document.querySelector('#finalActions').hidden=false;document.querySelector('#goal').classList.add('net-hit');player().setAttribute('transform','translate(165 -12)');stick().setAttribute('transform','rotate(-65 148 248)');}
 function start(){reset();if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return;}playing=true;let startTime=null;
  function animate(time){if(!playing)return;if(startTime===null)startTime=time;const t=time-startTime;
   // 0–1700 ms: patinagem; 1700–2300: preparação; 2300–3100: remate; depois golo
   const x=t<1700?-115+280*(t/1700):165;
   player().setAttribute('transform',`translate(${x} ${t<1700?Math.sin(t/85)*2:0})`);
   if(t<2300){ball().setAttribute('cx',String(x+248));ball().setAttribute('cy','307');stick().setAttribute('transform',`rotate(${t<1700?Math.sin(t/110)*3:-16} 148 248)`);}
   else if(t<3100){const p=Math.min(1,(t-2300)/800);ball().setAttribute('cx',String(413+225*p));ball().setAttribute('cy',String(307-55*p));stick().setAttribute('transform',`rotate(${25*(1-p)} 148 248)`);document.querySelector('#speed').setAttribute('opacity',p<.8?'1':'0');document.querySelector('#speed').setAttribute('transform',`translate(${200*p} ${-50*p})`);}
   if(t>=3100){finish();return;}frame=requestAnimationFrame(animate);
  }frame=requestAnimationFrame(animate);
 }
 return {start,reset};
})();
