$(window).on("load resize",function(){
    init();
})

function init(){
    // console.log($(".photo:first").height());
    // $(".photo").width($(".photo").height());
    // $(".photo").css("padding", $(".photo").height() * 0.01);
    // $(".photo").each(function(index, element){
    //     $(this).css("width", $(this).height());
    // });
    $(".photos").each(function(index, element){
        console.log(this);
        console.log($(this).height() / 4 + "px")
        $(this).css("grid-auto-columns", $(this).height() / 4 + "px");
    });
    $(".locationHighlite").each(function(index, element){
        $(this).css("width", $(this).children(".photos").width());
    });
    $("#filterBtn").css("top", $("#filterBtn").css("right"));
}