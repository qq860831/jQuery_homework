$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault();
        // 取消事件默認行為
        $(this).parent().siblings().find('.dropdown-open').slideUp();
        $(this).parent().find('.dropdown-open').slideToggle();
    });
});