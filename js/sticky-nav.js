(function() {
    const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
    const header = document.querySelector('.header');
    const sticky = header.offsetHeight;

    function loop() {
        if(window.pageYOffset >= sticky) {
            document.querySelector('.hero').classList.add('reset-clip-path');
        } else {
            document.querySelector('.hero').classList.remove('reset-clip-path');
        } 
        scroll(loop);
    }
    
    loop();
})();


// window.addEventListener('scroll', function() {
//     if(window.pageYOffset >= sticky) {
//         document.querySelector('.hero').classList.add('reset-clip-path');
//         // header.classList.add('header--sticky');
//         // document.querySelector('.hero').style.marginTop = sticky + 'px';
//     } else {
//         document.querySelector('.hero').classList.remove('reset-clip-path');
//         // header.classList.remove('header--sticky');
//         // document.querySelector('.hero').style.marginTop = '0px';
//     } 

    // if(window.pageYOffset >= sticky) {
    //     header.classList.add('header--in-view');
    // } else if(window.pageYOffset === 0) {
    //     header.classList.remove('header--in-view');
    // }
// });