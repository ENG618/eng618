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

//initiate the plugin and pass the id of the div containing gallery images 
$("#img_MMD1").elevateZoom({
    gallery:'MMD1',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true,
    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
});

//pass the images to Fancybox 
$("#img_MMD1").on("click", function(e) {
    var ez = $('#img_MMD1').data('elevateZoom');    
        $.fancybox(ez.getGalleryList()); 
    return false;
});//See more at: http://www.elevateweb.co.uk/image-zoom/examples#sthash.RN3lOGIH.dpuf

});