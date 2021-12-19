window.addEventListener('scroll', scrollFn); 
window.addEventListener('load', scrollFn);
window.addEventListener('scroll', scrollFnt);

let cheeseBurger = document.querySelector('#cheeseBurger');
let hamburger = document.querySelector('#hamburger');
let winY = window.pageYOffset;
let winZ = window.innerHeight;



let scrollBox = document.querySelectorAll('.scrollAni');
let scrollBoxtypo = document.querySelectorAll('.scrollAnitypo');

hamburger.addEventListener('click',aniFn);

if (window.matchMedia('(max-width:680)').matches){
    animationStartline = winZ/1.2;
    animationStartlineT = winZ/2;
}else{
    animationStartline = winZ/1.5;
    animationStartlineT = winZ/2;
}


function aniFn(){
    cheeseBurger.classList.toggle('on');
}


function scrollFn()
{
    for(let i = 0; i < scrollBox.length; i++) 
    {
        if( window.innerHeight > scrollBox[i].getBoundingClientRect().top + animationStartline )
        {
            scrollBox[i].classList.add('show');
        }
    }

}

function scrollFnt()
{
    for(let i = 0; i < scrollBoxtypo.length; i++) 
    {
        if( window.innerHeight > scrollBoxtypo[i].getBoundingClientRect().top + animationStartlineT )
        {
            scrollBoxtypo[i].classList.add('show');
        }
    }

}

