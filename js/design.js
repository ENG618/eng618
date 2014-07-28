/* JavaScript Document */

var windowSize = '';
var windowWidth = 0;
var actualSize = 0;
var window;
var newWindowSize;

function loadHero() {

  if (windowSize === 'large') {
    $('nav').css('height', 'auto');
    $('#hero').load('content/hero_content_large.html');
  }
  if (windowSize === 'medium') {
    if (actualSize > 500) {
      $('nav').css('height', 'auto');
    }
    $('#hero').load('content/hero_content_medium.html');
  }
  if (windowSize === 'small') {
    if (actualSize <= 500) {
      $('nav').css('height', '0px');
    }
    $('#hero').html('');
    $('a.mobile_menu').removeClass('selected');
  }
}

function checkBrowserSize() {
  windowWidth = window.outerWidth;
  var contentWidth = $('body').width();
  var sizeDiff = windowWidth - contentWidth;
  actualSize = windowWidth - sizeDiff;

  if (actualSize > 800) {newWindowSize = 'large'; }
  if (actualSize <= 800 && actualSize > 500) {newWindowSize = 'medium'; }
  if (actualSize <= 500) {newWindowSize = 'small'; }

  // $('h1').html(windowWidth + ' (' + contentWidth + '+' + sizeDiff + ')' + ' is ' + newWindowSize);

  if (windowSize !== newWindowSize) {
    windowSize = newWindowSize;
    loadHero();
  // } else {
  //   $('h1').append(' -- no change');
  }
}


$(document).ready(function () {
  // alert('Is working');
  checkBrowserSize();
  setInterval('checkBrowserSize()', 1000);
  //loadHero();

  $('a.mobile_menu').on('click', function () {
    var navHeight = $('nav').height();
    var newNavHeight = $('nav div').height();

    if (navHeight === 0) {
      $('nav').animate({height: newNavHeight + 'px'}, 500);
      $(this).addClass('selected');
    } else {
      $('nav').animate({height: '0px'}, 500);
      $(this).removeClass('selected');
    }
  });

});





