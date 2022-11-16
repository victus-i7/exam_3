let dropdownBtn1 = document.querySelector('.dropdown__btn1');
let dropDown1 = document.querySelector('.dropdown1');
let dropdownBtn2 = document.querySelector('.dropdown__btn2');
let dropDown2 = document.querySelector('.dropdown2');
let arrowDown = document.querySelector('.arrow1');
let arrowDown2 = document.querySelector('.arrow2');
let dropdownSecondBtn1 = document.querySelector('.dropdown__second__btn1');
let dropdownSecond1 = document.querySelector('.dropdown__second1');
let dropdownSecondBtn2 = document.querySelector('.dropdown__second__btn2');
let dropdownSecond2 = document.querySelector('.dropdown__second2');
let gamMeu = document.querySelector('.gamburger__menu');
let resMenu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close__btn');


dropdownBtn1.addEventListener('click' , ()=>{
    dropDown1.classList.toggle("show");
if(arrowDown.getAttribute('src')=='images/icon-arrow-down.svg'){
    arrowDown.setAttribute('src' , 'images/icon-arrow-up.svg')
}else{
    arrowDown.setAttribute('src' , 'images/icon-arrow-down.svg')
}
})

dropdownBtn2.addEventListener('click' , ()=>{
    dropDown2.classList.toggle("show");
if(arrowDown2.getAttribute('src')=='images/icon-arrow-down.svg'){
    arrowDown2.setAttribute('src' , 'images/icon-arrow-up.svg')
}else{
    arrowDown2.setAttribute('src' , 'images/icon-arrow-down.svg')
}
})

gamMeu.addEventListener('click' , ()=>{
    resMenu.classList.toggle("menu__show");
})

closeBtn.addEventListener('click' , ()=>{
    resMenu.setAttribute('class', 'menu menu__hide');
})


dropdownSecondBtn1.addEventListener('click' , ()=>{
    dropdownSecond1.classList.toggle("show");
})

dropdownSecondBtn2.addEventListener('click' , ()=>{
    dropdownSecond2.classList.toggle("show");
})