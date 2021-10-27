$(window).on("load resize",function(){
    init();
})

function init(){
    console.log($(".photo:first").height());
    $(".photo").width($(".photo").height());
}