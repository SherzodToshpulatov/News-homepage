// import './scss/style.scss';

const btnOpen = document.querySelector('#btnOpen');
const media = window.matchMedia('(width < 1110px)');
navContent = document.querySelector('.nav__content');

function openMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'true');
}

function setUpNav(e){
    if(e.matches){
       navContent.style.display = 'block';
    }
    else{
        navContent.style.display = '';
    }
}

setUpNav(media);

btnOpen.addEventListener('click', openMobileMenu);
media.addEventListener('change', function(e){

    setUpNav(e)
});


