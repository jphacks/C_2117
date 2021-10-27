$(window).on("load resize",function(){
    init();
})

function init(){
    console.log($(".photo:first").height());
    $(".photo").width($(".photo").height());
    $(".photo").css("padding", $(".photo").height() * 0.01);
    $(".locationHighlite").each(function(index, element){
        $(this).css("width", $(this).children(".photos").width());
    });
}

let style;

function setup() {
}