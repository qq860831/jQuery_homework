$(document).ready(function(){
    // $('.dropdown').click(function(event){
    //     event.preventDefault();
    //     // 取消事件默認行為
    //     $(this).parent().siblings().find('.dropdown-open').slideUp();
    //     $(this).parent().find('.dropdown-open').slideToggle();
    // });

    // 輪播效果
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        effect : 'fade',
        fadeEffect: {
        crossFade: true,
        },
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
          },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
});