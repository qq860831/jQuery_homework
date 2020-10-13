$(document).ready(function () {
    // 收合選單
  $('.dropdown').click(function(e){ 
    e.preventDefault();
    $(this).parent().siblings().find('.dropdown-open').slideUp();
    $(this).parent().find('.dropdown-open').slideToggle();
    // 點擊到這個元素回到父層再到父層內找子元素 .dropdown-open進行 slideToggle 這動作
  });
  });
  
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
  
  
    //回到最上方效果
    // 在屬性名稱上設置一個點擊事件，事件內用scrollTop語法
    $('.fa-chevron-circle-up').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        },700);
    });
  