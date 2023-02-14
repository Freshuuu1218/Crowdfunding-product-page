const nav = document.querySelector('#navigation');
const menu = document.querySelector('.hamburgerMenu');

menu.addEventListener('click',()=>{
    nav.style.display == 'none' ? nav.style.display='flex' : nav.style.display='none';
})