(function() {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    const header = document.querySelector('.header');
    const sticky = header.offsetHeight;
    
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
        // Clip path animation
        if(window.pageYOffset >= sticky) {
            document.querySelector('.hero').classList.add('reset-clip-path');
        } else {
            document.querySelector('.hero').classList.remove('reset-clip-path');
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