(function() {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const sticky = header.offsetHeight;

    const galleryImages = document.querySelectorAll('.portfolio__image');
    console.log(galleryImages);
    
    function loop() {
        // Sliding conent
        elementsToShow.forEach(function(element) {
            if(isElementInViewport(element)) {
                element.classList.add('is-visible');
            } else {
                // Keep class for single animation
                // element.classList.remove('is-visible');
            }
        });

        // Gallery animation
        galleryImages.forEach(function(image) {
            if(isElementInViewport(image)) {
                image.classList.add('fade-in');
            }
        });

        // Clip path animation
        if(window.pageYOffset >= sticky) {
            header.classList.add('header-expand');
            hero.classList.add('reset-clip-path');
        } else {
            header.classList.remove('header-expand');
            hero.classList.remove('reset-clip-path');
        } 
        scroll(loop);
    }
    
    loop();
    
    function isElementInViewport(el) {
        if(typeof jQuery === 'function' && el instanceof jQuery) {
            el = el[0];
        }
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 
                && rect.bottom >= 0) 
            || 
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && 
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 
            ||
            (rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
        );
    }
})();