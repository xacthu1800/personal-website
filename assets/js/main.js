let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight ;
    let id = sec.getAttribute('id');
    
    console.log(height);

      console.log(`top: ${top}`);
      console.log(`offset: ${offset}`);
      console.log(`offset+ height: ${offset + height}`);
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
}


