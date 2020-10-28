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
    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      autoHeight: true, //高度一樣
      loop:true,  //循環播放 
      slidesPerView : 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: false,
      keyboard: true,

      autoplay: {
        delay: 3000,
      },
    });     
  
  
    //回到最上方效果
    // 在屬性名稱上設置一個點擊事件，事件內用scrollTop語法
    $('.fa-chevron-circle-up').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        },1000);
    });
  