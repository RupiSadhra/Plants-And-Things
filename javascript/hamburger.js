const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-container');
const close=document.querySelector('.close-icon');


hamburger.addEventListener('click',function()
{ menu.classList.remove('hide-menu');
    menu.classList.add('show-menu');
})

close.addEventListener('click',function()
{
    menu.classList.remove('show-menu');
    menu.classList.add('hide-menu');
})