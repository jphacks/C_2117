let swiper;
let trips;
let images;
const api_prefix ="http://127.0.0.1:8000/"
$(window).on("load",function(){
    init();
})



function init(){
    photoInit();

    let requestURL_trip = 'http://127.0.0.1:8000/api/trip';
    let request_trip = new XMLHttpRequest();
    request_trip.open('GET', requestURL_trip);
    request_trip.responseType = 'json';
    request_trip.send();
    request_trip.onload = function() {
        console.log(request_trip.response);
        trips = request_trip.response;
        let requestURL_images = 'http://127.0.0.1:8000/api/images';
        let request_images = new XMLHttpRequest();
        request_images.open('GET', requestURL_images);
        request_images.responseType = 'json';
        request_images.send();
        request_images.onload = function() {
            console.log(request_images.response);
            images = request_images.response;
            viewInit(trips, images);
        }
    }


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

// ------------------------ createSwiper --------------------------------
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
        // autoplay: {
        //     delay: 3000,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            type:'bullets',
            clickable:true,
        },
    });
}

// -------------------------------- photoInit ----------------------------------------
function photoInit(){
    $(".photos").each(function(index, element){
        console.log(this);
        console.log($(this).height() / 4 + "px")
        // $(this).css("grid-auto-columns", $(this).height() / 4 + "px");
    });
    $(".swiper-slide").each(function(index, element){
        $(this).css("width", $(this).children(".photos").width());
    });
}
// -----------------------------------------------------------------------------------

// ------------------------------- viewInit -----------------------------------------
function viewInit(trips, images){
    for(let i = 0; i < trips.length; i++){
        let swiperSlide = $($('#swiper-wrapper_template').html());
        
        swiperSlide.children("a").children(".photo").children("img").attr("src",api_prefix+images[i].file_name);
        swiperSlide.children("a").children(".tripDetail").children(".tripTitle").text(trips[i].trip_name);
        swiperSlide.children("a").children(".tripDetail").children(".tripdate").text(trips[i].trip_start);
        console.log(swiperSlide.get(0));
        swiper.appendSlide(swiperSlide.get(0));
        // swiper.appendSlide('<div class="swiper-slide"><img src="Bの画像" alt="lifethings"></div>');
        // swiper.appendSlide('<div class="swiper-slide"><img src="Cの画像" alt="lifethings"></div>');

        // console.log(extracted.length);
        // if(extracted.length == 0)continue;
        
        // extracted.forEach(function(element){
        //     console.log("importance: " + element.importance);
        //     let photo = null;
        //     if(element.importance > 5){
        //         photo = $($('#photo_big_template').html());
        //     }else{
        //         photo = $($('#photo_small_template').html());
        //     }
        //     let img = new Image();
        //     img.src = api_prefix + element.file_name;
        //     $(img).appendTo(photo);
        //     photo.appendTo(swiperSlide.children(".photos"));

        // });
        swiperSlide.appendTo('#locationHighliteWrapper');
        $($('#spacer_template').html()).appendTo('#locationHighliteWrapper')
    }
    photoInit();
}
// -----------------------------------------------------------------------------------



