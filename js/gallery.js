function buildGalleries(){
 document.querySelectorAll('[data-gallery]').forEach(root=>{
  const key=root.dataset.gallery, files=SITE_CONFIG.fotos[key]||[];
  if(!files.length){root.innerHTML='<div class="photo-placeholder"><span>📷</span><strong>AS NOSSAS MEMÓRIAS</strong><small>Adiciona fotografias em js/config.js</small></div>';return;}
  let index=0;
  root.innerHTML='<div class="photo-frame"><img alt="Memória partilhada" loading="lazy"><div class="photo-fallback" hidden>Fotografia não encontrada. Confirma o caminho em config.js.</div></div><div class="gallery-controls"><button type="button" class="gallery-prev" aria-label="Fotografia anterior">←</button><span class="gallery-count"></span><button type="button" class="gallery-next" aria-label="Fotografia seguinte">→</button></div>';
  const img=root.querySelector('img'), count=root.querySelector('.gallery-count'), fallback=root.querySelector('.photo-fallback');
  function render(){fallback.hidden=true;img.hidden=false;img.src=files[index];img.alt=`${key}: fotografia ${index+1} de ${files.length}`;count.textContent=`${index+1} / ${files.length}`;}
  img.onerror=()=>{img.hidden=true;fallback.hidden=false;};
  img.addEventListener('click',()=>{if(img.hidden)return;const dialog=document.querySelector('#lightbox');document.querySelector('#lightboxImg').src=img.src;dialog.showModal();});
  root.querySelector('.gallery-prev').onclick=()=>{index=(index-1+files.length)%files.length;render();};
  root.querySelector('.gallery-next').onclick=()=>{index=(index+1)%files.length;render();};
  let startX=0;root.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;},{passive:true});root.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-startX;if(Math.abs(d)>45){index=(index+(d<0?1:-1)+files.length)%files.length;render();}},{passive:true});
  render();
 });
 document.querySelector('#closeLightbox').onclick=()=>document.querySelector('#lightbox').close();
 document.querySelector('#lightbox').addEventListener('click',e=>{if(e.target.tagName==='DIALOG')e.target.close();});
}
