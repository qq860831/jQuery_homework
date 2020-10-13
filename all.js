$(document).ready(function(){

    // 燈箱(圖不大效果不明顯)
    lightbox.option({
        'resizeDuration':3000,
        'wrapAround':true,
        'fadeDuration':1000,
        'imageFadeDuration':1000,
    });

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
    });

});