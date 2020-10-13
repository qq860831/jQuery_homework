$(document).ready(function(){
    // $('.dropdown').click(function(event){
    //     event.preventDefault();
    //     // 取消事件默認行為
    //     $(this).parent().siblings().find('.dropdown-open').slideUp();
    //     $(this).parent().find('.dropdown-open').slideToggle();
    // });

    // 輪播效果
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', 
        loop: true, 
        effect : 'fade',
        fadeEffect: {
        crossFade: true,
        },
        autoplay: true,
        
        pagination: {
            el: '.swiper-pagination',
          },
        
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    })
});