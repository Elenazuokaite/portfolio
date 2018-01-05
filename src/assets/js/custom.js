$(document).ready(landPage);

var opened = false;

function slider() {
  if (opened === false) {
    opened = true;
    // $('#hero').css('display', 'none');
    $('#hero').slideDown(1000);
    $('#hero').css('border-top-left-radius', '0');
    $('#hero').css('border-top-right-radius', '0');
  } else {
    $('#hero').css('border-top-left-radius', '0');
    $('#hero').css('border-top-right-radius', '0');
    $('#hero').css('display', 'block');
  }
  // $('.carousel').css('display', 'none');
  // $('.carousel').slideDown(3000);
}
function landPage(jQuery) {
  //slide down hero, carousel
  slider();
  //fade in nav, footer
  function fadeInPage() {
    $('nav').css('display', 'none');
    $('footer').css('display', 'none');
    $('.patern').css('display', 'none');
    setTimeout(function () {
      $('nav').fadeIn(1000);
      $('footer').fadeIn(1000);
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
      $('#skills').css('background-color', '#aefab1');
      $('#prog-two').css('opacity', '1');
      $('#prog-one').css('opacity', '0');
    } else if ($(this).attr('id') == 'three') {
      $('#skills').css('background-color', '#bde9f5');
      $('#prog-three').css('opacity', '1');
      $('#prog-two').css('opacity', '0');
    } else if ($(this).attr('id') == 'four') {
      $('#skills').css('background-color', '#fff38b');
      $('#prog-four').css('opacity', '1');
      $('#prog-three').css('opacity', '0');
    } else if ($(this).attr('id') == 'five') {
      $('#skills').css('background-color', '#f5b7ff');
      $('#prog-five').css('opacity', '1');
      $('#prog-four').css('opacity', '0');
    } else {
      $('#skills').css('background-color', '#ff9bcd');
      $('#prog-one').css('opacity', '1');
      $('#prog-five').css('opacity', '0');
      // $("#prog-one").show("slow");
    }
  })
  //call function on clicking logo
  $("#homeLink").click(landPage);
  $("#skillsLink").click(landPage);
  // var canvas = $('#canvas');
  // canvas.width = canvas.scrollWidth;
  // canvas.height = canvas.scrollHeight;
  // var ctx = canvas.getContext('2d');
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(100, 300);
  // ctx.lineTo(300, 300);
  // ctx.closePath();
}
////////////////////////////
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




