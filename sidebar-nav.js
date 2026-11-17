
(()=>{
 if(location.pathname!=='/'&&location.pathname!=='/index.html')return;
 const links=[...document.querySelectorAll('.section-menu [data-section]')];
 const sections=links.map(link=>({link,target:document.querySelector(link.dataset.section)})).filter(item=>item.target);
 let pending=false;
 function update(){
  pending=false;
  const threshold=innerWidth<=860?110:80;
  let active=sections[0];
  for(const item of sections)if(item.target.getBoundingClientRect().top<=threshold)active=item;
  if(window.scrollY>0&&Math.ceil(window.scrollY+innerHeight)>=document.documentElement.scrollHeight-2)active=sections[sections.length-1]||active;
  for(const item of sections){if(item===active)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');}
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(update);}}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);addEventListener('hashchange',schedule);addEventListener('load',schedule);update();
})();
