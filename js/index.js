const enableSwiper = function() {
    mySwiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 1.2,
        spaceBetween:16
    });
};


const breakpoint = window.matchMedia( '(min-width:768px)' );

let mySwiper;


const breakpointChecker = function() {

    if ( breakpoint.matches === true ) {

        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );


    } else if ( breakpoint.matches === false ) {

        return enableSwiper();
    }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();


let sliderBtn = document.querySelector(".slider__btn");
let brandList = document.querySelector(".slider__wrapper");
let sliderBtnIcon = document.querySelector('.slider__btn-icon');
let sliderBtnText = sliderBtn.querySelector('.slider__btn-text');


sliderBtn.addEventListener("click", (e)=>{
    brandList.classList.toggle('slider__wrapper_hidden');
    sliderBtnIcon.classList.toggle('slider__btn-icon_show');

    if(sliderBtnIcon.classList.contains('slider__btn-icon_show')){
        sliderBtnText.innerText = "Скрыть"
    } else {
        sliderBtnText.innerText = "Показать все"
    }
})