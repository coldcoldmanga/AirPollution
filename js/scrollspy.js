let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-element a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
            {
                navLinks.forEach(link =>{
                    link.classList.remove('active');
                    document.querySelector('.navbar-element a[href*=' + id + ']').classList.add('active');
                });
            };
    });
};