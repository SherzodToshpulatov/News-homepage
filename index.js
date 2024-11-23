// import './scss/style.scss';

const body = document.querySelector('body');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 1110px)');
navContent = document.querySelector('.nav__content');
navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll')
}

function closeMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'false');
    body.classList.remove('noscroll')
}



function setUpNav(e){
    if(e.matches){
       
       
       setTimeout(()=> {
        navContent.style.display = 'block';
        navOverlay.style.display = 'block';
       }, 500);
    }
    else{
        navContent.style.display = '';
        navOverlay.style.display = '';
    }
}

setUpNav(media);

btnOpen.addEventListener('click', openMobileMenu);


btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function(e){

    setUpNav(e)
});


