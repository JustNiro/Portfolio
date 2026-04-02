// Observer pour toutes les sections et cartes
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const section = entry.target;
      section.classList.add('visible');

      // H2 de la section
      const title = section.querySelector('h2');
      if(title) title.classList.add('visible');

      // About spécifique : afficher conteneur + paragraphes
      if(section.id === 'about'){
        const aboutBox = section.querySelector('.about');
        const paragraphs = section.querySelectorAll('.about p');
        if(aboutBox) aboutBox.classList.add('visible');
        paragraphs.forEach((p,i)=>{ setTimeout(()=>p.classList.add('visible'), i*200); });
      }

      // Cartes projets
      const cards = section.querySelectorAll('.card');
      cards.forEach((card,i)=>{ setTimeout(()=>card.classList.add('visible'), i*200); });
    }
  });
},{threshold:0.2});

document.querySelectorAll('.section').forEach(el => observer.observe(el));
