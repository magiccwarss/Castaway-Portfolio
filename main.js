const humbruger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav_menu");


let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

AOS.init();