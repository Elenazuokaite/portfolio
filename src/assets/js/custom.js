$(document).ready(landPage);
function slider() {
  $('#hero').slideDown(1000);
  $('#hero').css('border-top-left-radius', '0');
  $('#hero').css('border-top-right-radius', '0');
  $('.carousel').slideDown(2000);
}
function landPage(jQuery) {
  //slide down hero, carousel
    slider(); 

  // $('.carousel-item').bind('mousewheel', function (e) {
  //   if (e.originalEvent.wheelDelta / 120 > 0) {
  //     $(this).carousel('next');
  //     if ($(this).attr('id') == 'two') {
  //       $('#hero').css('background-color', '#bde9f5');
  //     } else if ($(this).attr('id') == 'three') {
  //       $('#hero').css('background-color', '#fff38b');
  //     } else if ($(this).attr('id') == 'four') {
  //       $('#hero').css('background', '#f5b7ff');
  //     } else if ($(this).attr('id') == 'five') {
  //       $('#hero').css('background-color', '#ff9bcd');
  //     } else {
  //       $('#hero').css('background-color', '#aefab1');
  //     }
  //   } else {
  //     $(this).carousel('prev');
  //     if ($(this).attr('id') == 'two') {
  //       $('#hero').css('background-color', '#ff9bcd');
  //     } else if ($(this).attr('id') == 'three') {
  //       $('#hero').css('background-color', '#aefab1');
  //     } else if ($(this).attr('id') == 'four') {
  //       $('#hero').css('background-color', '#bde9f5');
  //     } else if ($(this).attr('id') == 'five') {
  //       $('#hero').css('background-color', '#fff38b');
  //     } else {
  //       $('#hero').css('background-color', '#f5b7ff');
  //     }
  //   }
  // });
  // $('.carousel-item').scroll(function () {
  //   if ($(this).attr('id') == 'two') {
  //     $('#hero').css('background-color', '#aefab1');
  //   } else if ($(this).attr('id') == 'three') {
  //     $('#hero').css('background-color', '#bde9f5');
  //   } else if ($(this).attr('id') == 'four') {
  //     $('#hero').css('background-color', '#fff38b');
  //   } else if ($(this).attr('id') == 'five') {
  //     $('#hero').css('background-color', '#f5b7ff');
  //   } else {
  //     $('#hero').css('background-color', '#ff9bcd');
  //   }
  // })
  // $('.carousel').scroll(function () {
  //   $(this).carousel('next');
  // });

  //fade in nav, footer
  function fadeInPage() {
    setTimeout(function () {
      $('nav').fadeIn(1000);
      $('footer').fadeIn(1000);
    }, 2000);
    setTimeout(function () {
      $('.patern').fadeIn(1000);
    }, 1000);
  }
  fadeInPage();
//carousel 
  $('.carousel').carousel({
    dist: 0,
    shift: 150,
    padding: 0,
  });
  $('.carousel-item').click(function () {
    if ($(this).attr('id') == 'two') {
      $('#hero').css('background-color', '#aefab1');
    } else if ($(this).attr('id') == 'three') {
      $('#hero').css('background-color', '#bde9f5');
    } else if ($(this).attr('id') == 'four') {
      $('#hero').css('background-color', '#fff38b');
      $('.logo').css('opacity', '1');
    } else if ($(this).attr('id') == 'five') {
      $('#hero').css('background-color', '#f5b7ff');
    } else {
      $('#hero').css('background-color', '#ff9bcd');
    }
  })
  //call function on clicking logo
  $("#homeLink").click(landPage);
}
////////////////////////////




