/** Code for Nivo Slider and transparent images **/


$(window).load(function() {
    $('#slider').nivoSlider({
	    beforeChange: function() {PNGManagement1()},
	    afterChange: function() {PNGManagement2()}
 	});
});

/* Hide and show sliders */
$(function(){
 	$('#Slider').hover(function(){        
 		$(".nivo-directionNav a").fadeIn('slow');      
 	});   
});

function PNGManagement1 () {
      setTimeout (function(){
      $('.nivoSlider .nivo-main-image').animate({opacity:0},1000)
      },20);
}
function PNGManagement2 () {
      setTimeout (function(){
      $('.nivoSlider .nivo-main-image').css({opacity:1});
      },20);
}

/** Prevent images from being right-clickable **/
$('img').bind('contextmenu', function(e){
    return false;
});

