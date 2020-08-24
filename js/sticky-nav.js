(function() {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
    const header = document.querySelector('.header');
    const hero = document.querySelector('hero');
    const sticky = header.offsetHeight;

    console.log(window.pageYOffset, sticky);

    function loop() {
        if(window.pageYOffset >= sticky) {
            hero.classList.add('reset-clip-path');
            header.classlit.add('header-expand');
        } else {
            hero.classList.remove('reset-clip-path');
            header.classList.remoove('header-expand');
        } 
        scroll(loop);
    }
    
    loop();
})();