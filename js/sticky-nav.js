const header = document.querySelector('.header');
const sticky = header.offsetHeight;

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset, sticky);
    if(window.pageYOffset >= sticky) {
        document.querySelector('.hero').classList.add('reset-clip-path');
        // header.classList.add('header--sticky');
        // document.querySelector('.hero').style.marginTop = sticky + 'px';
    } else {
        document.querySelector('.hero').classList.remove('reset-clip-path');
        // header.classList.remove('header--sticky');
        // document.querySelector('.hero').style.marginTop = '0px';
    } 

    // if(window.pageYOffset >= sticky) {
    //     header.classList.add('header--in-view');
    // } else if(window.pageYOffset === 0) {
    //     header.classList.remove('header--in-view');
    // }
});