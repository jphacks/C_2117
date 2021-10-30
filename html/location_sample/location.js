let swiper
$(window).on("load",function(){
    init();
    changeDetails();
})

function init(){
    createSwiper();
    $('.categoryradio').change(function() {
        let val = $(this).val();
        $(".swiper-slide").each(function(){
            console.log($(this).attr("data-category"));
            if($(this).attr("data-category") != val && $(this).attr("data-category") != "All"){
                // $(this).css("display","none");  
                $(this).hide();
                createSwiper();
            } else{
                // $(this).css("display","block");
                $(this).show();
                createSwiper();
            }
        });
        swiper.update();

        let slides = $(".swiper-slide");
        let sign = -1;
        for(let i = 0; i < slides.length; i++){
            console.log(activeIndex + sign * i);
            if($(slides[activeIndex + sign * i]).css("display") != "none"){
                // swiper.activeIndex=2
                console.log("before"+activeIndex);
                // swiper.slideTo(activeIndex+sign*i);
                console.log(swiper.slideTo(2));
                console.log("after"+swiper.activeIndex);
                // return;
            } else{
                swiper.removeSlide(activeIndex + sign * i);
            }
            if(activeIndex + -1 * sign * (i + 1) >= 0){
                sign*=-1;
            }
            // createSwiper();
        }
        swiper.update();
        createSwiper();
    
    });
}

const createSwiper=()=>{
    swiper = new Swiper('#locationcontainer', {
        // これをするとぎこちなさがなくなるらしい
        observer: true,
        observeParents: true,
        // ----------------------------------
        centeredSlides: true,
        speed: 500,
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            type:'bullets',
            clickable:true,
        },
        breakpoints: {

            640: {
                slidesPerView: 3.5,
            },
            768: {
                slidesPerView: 3.75,
            },
            1080: {
                slidesPerView: 4.25,
            },
            1280: {
                slidesPerView: 4.75,
            },
        },
    });
    swiper.on('slideChangeTransitionEnd', changeDetails);
      
}

function changeDetails () {
    $("#activeContentdetail .tripDisplay .dateDisplay").text($(".swiper-slide-active").attr("data-date"))
    $("#activeContentdetail .tripDisplay .timeDisplay").text($(".swiper-slide-active").attr("data-time"))
    $("#activeContentdetail .placeDisplay").text($(".swiper-slide-active").attr("data-place"))
    const div = document.querySelector('#activeContentdetail')
    div.animate([{opacity: '0'}, {opacity: '1'}], 800)
}



