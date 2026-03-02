(function(){
  const btn=document.querySelector('[data-nav-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(btn&&nav){
    btn.addEventListener('click',()=>{
      const isOpen=nav.getAttribute('data-open')==='true';
      nav.setAttribute('data-open',String(!isOpen));
      btn.setAttribute('aria-expanded',String(!isOpen));
    });
  }
  const slides=[...document.querySelectorAll('[data-slide]')];
  const dots=[...document.querySelectorAll('[data-dot]')];
  const prev=document.querySelector('[data-prev]');
  const next=document.querySelector('[data-next]');
  if(!slides.length) return;
  let idx=0;
  function show(i){
    idx=(i+slides.length)%slides.length;
    slides.forEach((s,n)=>s.classList.toggle('active',n===idx));
    dots.forEach((d,n)=>d.classList.toggle('active',n===idx));
  }
  const adv=(s)=>show(idx+s);
  prev&&prev.addEventListener('click',()=>adv(-1));
  next&&next.addEventListener('click',()=>adv(1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));
  setInterval(()=>adv(1),6000);
  show(0);
})();