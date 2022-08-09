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

sliderBtn.addEventListener("click", (e)=>{
    brandList.classList.toggle('slider__wrapper_closed');
    sliderBtn.classList.toggle('slider__btn_show');

    if(sliderBtn.classList.contains('slider__btn_show')){
        sliderBtn.innerText = "Скрыть"
    } else {
        sliderBtn.innerText = "Показать все"
    }
})