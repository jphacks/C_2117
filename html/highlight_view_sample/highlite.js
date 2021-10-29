const image_api_prefix ="http://127.0.0.1:8000/"
let locations;
let images;

$(window).on("load resize",function(){
    init();
})

function init(){
    $(".photos").each(function(index, element){
        console.log(this);
        console.log($(this).height() / 4 + "px")
        $(this).css("grid-auto-columns", $(this).height() / 4 + "px");
    });
    $(".locationHighlite").each(function(index, element){
        $(this).css("width", $(this).children(".photos").width());
    });
    $("#filterBtn").css("top", $("#filterBtn").css("right"));

    let requestURL_visitHistory = 'http://127.0.0.1:8000/api/trip/?trip_name=大阪旅行';
    let request_visitHistory = new XMLHttpRequest();
    request_visitHistory.open('GET', requestURL_visitHistory);
    request_visitHistory.responseType = 'json';
    request_visitHistory.send();
    request_visitHistory.onload = function() {
        console.log(request_visitHistory.response);
        locations = request_visitHistory.response;
        viewInit(images);
    }

    let requestURL_images = 'http://127.0.0.1:8000/api/images/?trip_id=2';
    let request_images = new XMLHttpRequest();
    request_images.open('GET', requestURL_images);
    request_images.responseType = 'json';
    request_images.send();
    request_images.onload = function() {
        console.log(request_images.response);
        images = request_images.response;
        viewInit(images);
    }
}

function viewInit(images){
    //時間順にソート
    

}