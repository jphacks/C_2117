const api_prefix ="http://127.0.0.1:8000/"
let swiper;
let trips;
let images;

$(window).on("load",function(){
    init();
    changeDetails();
    // $("#contents").children("#tripTitle").text(api_prefix+locations[2].place_visited);
})

function init(){
    photoInit();

    let requestURL_visitHistory = 'http://127.0.0.1:8000/api/visitHistry/?trip_id=3';
    let request_visitHistory = new XMLHttpRequest();
    request_visitHistory.open('GET', requestURL_visitHistory);
    request_visitHistory.responseType = 'json';
    request_visitHistory.send();
    request_visitHistory.onload = function() {
        console.log(request_visitHistory.response);
        locations = request_visitHistory.response;
        let requestURL_images = 'http://127.0.0.1:8000/api/images/?trip_id=3';
        let request_images = new XMLHttpRequest();
        request_images.open('GET', requestURL_images);
        request_images.responseType = 'json';
        request_images.send();
        request_images.onload = function() {
            console.log(request_images.response);
            images = request_images.response;
            viewInit(locations, images);
        }
    }
    createSwiper();
    $('.categoryradio').change(function() {
        let val = $(this).val();
        $(".swiper-slide").each(function(){
            console.log($(this).attr("data-category"));
            if($(this).attr("data-category") != val && $(this).attr("data-category") != "All"){ 
                $(this).hide();
                createSwiper();
            } else{
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
                console.log("before"+activeIndex);
                console.log(swiper.slideTo(2));
                console.log("after"+swiper.activeIndex);
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

// -------------------------------- photoInit ----------------------------------------
function photoInit(){
    // $(".photo").each(function(index, element){
    //     console.log(this);
    //     console.log($(this).height() / 4 + "px")
    //     // $(this).css("grid-auto-columns", $(this).height() / 4 + "px");
    // });
    // $(".swiper-slide").each(function(index, element){
    //     $(this).css("width", $(this).children(".photo").width());
    // });
}
// -----------------------------------------------------------------------------------

// ------------------------------- viewInit -----------------------------------------
function viewInit(locations, images){
    for(let i = 0; i < locations.length; i++){
        let swiperSlide = $($('#swiper-wrapper_template').html());
    
        swiperSlide.attr("data-date",locations[i].visit_start);
        // swiperSlide.attr("data-date").text(locations[i].visit_start);
        // swiperSlide.attr("data-time").text(locations[i].visit_start);
        swiperSlide.attr("data-place",locations[i].place_visited);
        swiperSlide.children(".photo").children("a").children("img").attr("src",api_prefix+images[i].file_name);
        console.log(swiperSlide.get(0));
        swiper.appendSlide(swiperSlide.get(0));
        
        // swiperSlide.appendTo('#locationHighliteWrapper');
        // $($('#spacer_template').html()).appendTo('#locationHighliteWrapper')
    }
    photoInit();
}
// -----------------------------------------------------------------------------------




