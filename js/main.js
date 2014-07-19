// Eric Garcia
// Professional Portfolio
// Garcia Enterprise
//

// Verifying js is loading
// alert("js is loading correctly!");

// Verify if jQuery is loading
// if (window.jQuery){
// 	alert("jQuery is loading!! :)");
// }else{
// 	alert("jQuery is not loading :(");
// }

// scroll-to-top button show and hide
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
    }
});
// scroll-to-top animate
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

// Google+ widget
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/platform.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
});