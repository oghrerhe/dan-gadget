 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');

 if (bar){
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
 }

 if (close){
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
 }


 window.addEventListener('load', function(){
  var preloader = document.querySelector('.preloader');
  setTimeout(function(){
  preloader.style.display = 'none';}, 1000);
 });
