let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight ;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
}

/*========skill programming language ======= */
let langHTML = '';
console.log(programLang[0]);
programLang.forEach((plang)=>{
  langHTML += `
    <div class="img-box grid-item">
      <img src="assets/icon/${plang.image}" class="skill-icon">
      <div class="tooltip">
        ${plang.lang}
      </div>
    </div>          
    `    
  ;
})
document.querySelector('.grid-content').innerHTML = langHTML;
