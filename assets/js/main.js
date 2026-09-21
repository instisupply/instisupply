const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
if(navToggle&&nav){
  navToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',open);
  });
}
document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

(function(){
  const cfg=window.INSTISUPPLY_CONFIG||{};

  document.querySelectorAll('[data-config-email]').forEach(el=>{
    if(cfg.email){
      el.textContent=cfg.email;
      if(el.tagName==='A') el.href='mailto:'+cfg.email;
    }
  });

  document.querySelectorAll('[data-social]').forEach(el=>{
    const key=el.getAttribute('data-social');
    const url=cfg.social&&cfg.social[key] ? cfg.social[key].trim() : '';
    if(url){ el.href=url; el.hidden=false; }
    else { el.hidden=true; el.removeAttribute('href'); }
  });

  document.querySelectorAll('.social-links').forEach(group=>{
    const visible=[...group.querySelectorAll('[data-social]')].some(el=>!el.hidden);
    if(!visible){
      const block=group.closest('.contact-social-block');
      if(block) block.hidden=true;
      group.hidden=true;
    }
  });

  document.querySelectorAll('[data-map]').forEach(el=>{
    if(cfg.mapQuery) el.src='https://www.google.com/maps?q='+encodeURIComponent(cfg.mapQuery)+'&output=embed';
  });
  document.querySelectorAll('[data-location-label]').forEach(el=>{
    if(cfg.locationLabel) el.textContent=cfg.locationLabel;
  });

  const modal=document.getElementById('form-modal');
  const modalIcon=document.getElementById('form-modal-icon');
  const modalTitle=document.getElementById('form-modal-title');
  const modalMessage=document.getElementById('form-modal-message');

  function showModal(ok,message){
    if(!modal){ alert(message); return; }
    modalIcon.textContent=ok?'✓':'!';
    modal.classList.toggle('is-error',!ok);
    modalTitle.textContent=ok?'Request Submitted':'Submission Failed';
    modalMessage.textContent=message;
    modal.hidden=false;
    document.body.classList.add('modal-open');
  }
  function closeModal(){
    if(!modal) return;
    modal.hidden=true;
    document.body.classList.remove('modal-open');
  }
  document.querySelectorAll('[data-modal-close]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  document.querySelectorAll('form[data-formspree]').forEach(form=>{
    const id=(cfg.formspreeId||'xyzynpnr').trim();
    const endpoint='https://formspree.io/f/'+id;
    form.action=endpoint;

    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();

      if(!form.reportValidity()) return;

      const button=form.querySelector('[type="submit"]');
      const original=button ? button.textContent : '';
      if(button){ button.disabled=true; button.textContent='Submitting…'; }

      try{
        const response=await fetch(endpoint,{
          method:'POST',
          body:new FormData(form),
          headers:{Accept:'application/json'}
        });

        let data={};
        try{ data=await response.json(); }catch(_){}

        if(response.ok){
          form.reset();
          showModal(true,'Thank you. Your request has been submitted successfully. We will get back to you shortly.');
        }else{
          const msg=Array.isArray(data.errors)
            ? data.errors.map(e=>e.message).filter(Boolean).join(' ')
            : '';
          showModal(false,msg||'Your request could not be submitted. Please try again or email sales@instisupply.com.');
        }
      }catch(error){
        showModal(false,'Your request could not be submitted. Please check your internet connection and try again, or email sales@instisupply.com.');
      }finally{
        if(button){ button.disabled=false; button.textContent=original; }
      }
    });
  });
})();