$(function () {


    let containerEl = document.querySelector('#tab');
    if(containerEl){
     let mixer = mixitup(containerEl,{
         classNames: {
              block: ""
      }
      
     });
 }

 //   Одинаковые размеры карточек

 const filterTab = document.querySelectorAll('.portfolio-works__tab button');
 const bigCard = document.querySelectorAll('.portfolio-works__link');

 for( let i = 0; i < filterTab.length; i++) {
   filterTab [i].addEventListener('click', function(){

       if(i == 0) {
           for(let j = 0; j < 2; j++){
               bigCard[j].classList.add('portfolio-works__link-big');
           }
       }

       else{
           for(let j = 0; j < 2; j++){
               bigCard[j].classList.remove('portfolio-works__link-big');
           }
           
       }
   });
 }


   // MOBILE BTN
   const navIcon = document.querySelector('.nav-icon');
   const nav = document.querySelector('.menu__list');
   
   navIcon.addEventListener("click", function () {
   // document.querySelector('.nav-icon').classList.toggle('active');
   
   this.classList.toggle("nav-icon--active");
   
   nav.classList.toggle('nav--active');
   });
   





$('.infographics__slider').slick({
    prevArrow: '<button type="button" class="slick-prev-info"></button>',
    nextArrow:'<button type="button" class="slick-next-info"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
});


// reviews
$('.reviews__slider-inner').slick({
    prevArrow: '<button type="button" class="slick-prev-reviews"></button>',
    nextArrow:'<button type="button" class="slick-next-reviews"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    
});


$('.questions-accardion__btn').on('click', function(){
    $(this).next().slideToggle(500); 
 });


 // Попап
 $('.video-fashion__play').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});





});