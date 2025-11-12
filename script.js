 // Simple theme toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', ()=>{
      document.body.classList.toggle('dark');
      themeBtn.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
    });

    // small reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting) e.target.classList.add('visible');
      }
    },{threshold:.06});
    reveals.forEach(r=>obs.observe(r));

    // project modal / example interaction placeholder
    function handleSubmit(e){
      e.preventDefault();
      const name = e.target.name.value || 'Friend';
      alert(`Thanks ${name}! (This is a demo form — wire it to your backend.)`);
      e.target.reset();
    }

    // accessibility: smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
      })
    })