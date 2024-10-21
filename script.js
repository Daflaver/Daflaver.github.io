const gallery = document.getElementById('gallery');
let scrollStep = 1;

function scrollGallery() {
    gallery.scrollBy(scrollStep, 0);

    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth || gallery.scrollLeft === 0) {
        scrollStep = -scrollStep; 
    }
}

setInterval(scrollGallery, 30);

document.addEventListener('click', function(e) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = `${e.pageX - 25}px`; 
    effect.style.top = `${e.pageY - 25}px`; 
    document.body.appendChild(effect);

    setTimeout(() => effect.remove(), 500); 
});
