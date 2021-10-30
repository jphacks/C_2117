let swiper;
$(window).on("load",function(){
    init();
})



function init(){
    // swiper = new Swiper('#tripselectioncontainer', {
    //     // これをするとぎこちなさがなくなるらしい
    //     observer: true,
    //     observeParents: true,
    //     // ----------------------------------

    //     centeredSlides: true,
    //     // loop: true,
    //     speed: 500,
    //     slidesPerView: 1.5,
    //     spaceBetween: 40,
    //     autoplay: {
    //         delay: 3000,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     pagination:{
    //         el:'.swiper-pagination',
    //         type:'bullets',
    //         clickable:true,
    //     },
    //     breakpoints: {
    
    //         640: {
    //             slidesPerView: 2.5,
    //         },
    //         768: {
    //             slidesPerView: 2.75,
    //         },
    //         1080: {
    //             slidesPerView: 3.25,
    //         },
    //         1280: {
    //             slidesPerView: 3.75,
    //         },
    //     },
    // });
    // swiperReset();
    createSwiper();
    $('.categoryradio').change(function() {
        let val = $(this).val();
        let activeIndex=swiper.activeIndex;
        $(".swiper-slide").each(function(){
            console.log($(this).attr("data-category"));
            if($(this).attr("data-category") != val && val != "All"){
                $(this).css("display","none");
                // swiper.destroy(false,true);
                createSwiper();  
                // $(this).hide();
                // $(this).addClass("swiper-slide-invisible-blank");
            } else{
                $(this).css("display","block");  
                // swiper.destroy(false,true);
                // swiper.destroy();
                // swiper.addslide();
                // swiper.addslide(0, '<div class="swiper-slide">東京</div>');
                createSwiper();  
                // $(this).addClass("swiper-slide-active");
            } 
        });
        // swiper.updateSlides();
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
        // swiper.slideReset();
        

    
    });
}
const createSwiper=()=>{
    swiper = new Swiper('#tripselectioncontainer', {
        // これをするとぎこちなさがなくなるらしい
        observer: true,
        observeParents: true,
        // ----------------------------------
        centeredSlides: true,
        speed: 500,
        slidesPerView: 3,
        // spaceBetween: 40,
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
        // breakpoints: {

        //     640: {
        //         slidesPerView: 2.5,
        //     },
        //     768: {
        //         slidesPerView: 2.75,
        //     },
        //     1080: {
        //         slidesPerView: 3.25,
        //     },
        //     1280: {
        //         slidesPerView: 3.75,
        //     },
        // },
    });
}



