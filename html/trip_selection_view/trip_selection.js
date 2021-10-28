$("window").on("load",function(){
    init();
})

function init(){
}

$(function(){
    $(".group-menu").hide();
    $(".button").click(function(){
        $(".group-menu").toggle(300);
    });
});