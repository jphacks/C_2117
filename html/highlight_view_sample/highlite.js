$(window).on("load",function(){
    init();
})

$(window).resize(function() {
    init();
});

function init(){
    console.log($(".photo").height());
    $(".photo").width($(".photo").height());
}