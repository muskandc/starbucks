let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

 menu.onclick = ()=>{
    menu.classList.toggle('fa-close');
    navbar.classList.toggle('active');
 }

 document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 } 
 document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 }

 document.querySelector('#user-btn').onclick = () =>{
    document.querySelector('#search-bar').classList.toggle('active');
 } 
 document.querySelector('#closee').onclick = () =>{
    document.querySelector('#search-bar').classList.toggle('active');
 }