window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.pageYOffset;
    
    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - window.innerHeight / 2) {
            section.style.backgroundColor = '#ff9a8d'; 
        } else {
            section.style.backgroundColor = '#fff'; 
        }
    });
});
