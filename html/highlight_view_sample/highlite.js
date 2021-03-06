const api_prefix ="http://127.0.0.1:8000/"
let locations;
let images;

$(window).on("load resize",function(){
    init();
})

function init(){
    photoInit();
    $("#filterBtn").css("top", $("#filterBtn").css("right"));

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
}

function photoInit(){
    $(".photos").each(function(index, element){
        console.log(this);
        console.log($(this).height() / 4 + "px")
        $(this).css("grid-auto-columns", $(this).height() / 4 + "px");
    });
    $(".locationHighlite").each(function(index, element){
        $(this).css("width", $(this).children(".photos").width());
    });
}

function viewInit(locations, images){
    

    for(let i = 0; i < locations.length; i++){
        console
        let locationHighlite = $($('#locationHighlite_template').html());
        locationHighlite.attr("name", "location_" + i);
        console.log(locationHighlite);
        locationHighlite.children(".locationName").text(locations[i].place_visited);
        
        let extracted = images.filter(function(item){
            return item.location == i + 1;
        });

        console.log(extracted.length);
        if(extracted.length == 0)continue;
        
        extracted.forEach(function(element){
            console.log("importance: " + element.importance);
            let photo = null;
            if(element.importance > 5){
                photo = $($('#photo_big_template').html());
            }else{
                photo = $($('#photo_small_template').html());
            }
            let img = new Image();
            img.src = api_prefix + element.file_name;
            $(img).appendTo(photo);
            photo.appendTo(locationHighlite.children(".photos"));

        });
        locationHighlite.appendTo('#locationHighliteWrapper');
        $($('#spacer_template').html()).appendTo('#locationHighliteWrapper')
    }
    photoInit();

    /*??????????????????????????????*/
    let location = getParam("location");
    if(location){
        console.log("location_" + location);
        location.hash  = "location_" + location;
    }
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}