$(document).ready(function(){

    $('.dropdown').click(function(e){ 
        e.preventDefault();
        $(this).parent().siblings().find('.dropdown-open').slideUp();
        $(this).parent().find('.dropdown-open').slideToggle();
        // 點擊到這個元素回到父層再到父層內找子元素 .dropdown-open進行 slideToggle 這動作
    });

    // 燈箱(圖不大效果不明顯)
    lightbox.option({
        'resizeDuration':3000,
        'wrapAround':true,
        'fadeDuration':1000,
        'imageFadeDuration':1000,
    });

    // go-top
    $('.icon').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },700);
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
