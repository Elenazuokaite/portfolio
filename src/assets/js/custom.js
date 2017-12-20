$(document).ready(function(){
  $('nav').css('display', 'none');
  $('footer').css('display', 'none');
  $('.patern').css('display', 'none');
  $('#hero').css('display', 'none');
  $('#hero').slideDown(1000);
  $('#hero').css('border-top-left-radius', '0');
  $('#hero').css('border-top-right-radius', '0');
  $('.carousel').css('display', 'none');
  $('.carousel').slideDown(2000);

  $('.carousel-item').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      $(this).carousel('next');
      if ($(this).attr('id') == 'two') {
        $('#hero').css('background-color', '#bde9f5');
      } else if ($(this).attr('id') == 'three') {
        $('#hero').css('background-color', '#fff38b');
      } else if ($(this).attr('id') == 'four') {
        $('#hero').css('background-color', '#f5b7ff');
      } else if ($(this).attr('id') == 'five') {
        $('#hero').css('background-color', '#ff9bcd');
      } else {
        $('#hero').css('background-color', '#aefab1');
      }
    } else {
      $(this).carousel('prev');
      if ($(this).attr('id') == 'two') {
        $('#hero').css('background-color', '#ff9bcd');
      } else if ($(this).attr('id') == 'three') {
        $('#hero').css('background-color', '#aefab1');
      } else if ($(this).attr('id') == 'four') {
        $('#hero').css('background-color', '#bde9f5');
      } else if ($(this).attr('id') == 'five') {
        $('#hero').css('background-color', '#fff38b');
      } else {
        $('#hero').css('background-color', '#f5b7ff');
      }
    }
  });
  

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

  setTimeout(function () { 
    $('nav').fadeIn(1000);
    $('footer').fadeIn(1000);
  }, 2000);
  setTimeout(function () {
    $('.patern').fadeIn(1000);
   
  }, 1000);
    $('.carousel').carousel({
      dist:0,
      shift:150,
      padding:0, 
  });
  $('.carousel-item').click(function() {
       if ($(this).attr('id') =='two') {
      $('#hero').css('background-color', '#aefab1');
    } else if ($(this).attr('id') == 'three') {
      $('#hero').css('background-color', '#bde9f5');
    } else if ($(this).attr('id') == 'four') {
      $('#hero').css('background-color', '#fff38b');
    } else if ($(this).attr('id') == 'five') {
      $('#hero').css('background-color', '#f5b7ff');
    } else {
      $('#hero').css('background-color', '#ff9bcd');
    }
  })
  });
  