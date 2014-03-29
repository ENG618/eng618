alert("js is loding correctly!");

if (window.jQuery){
	alert("jQuery is loading!! :)");
}else{
	alert("jQuery is not loding :(");
}

// scroll-to-top button show and hide
jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
    }
});
// scroll-to-top animate
jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});