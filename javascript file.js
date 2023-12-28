jQuery(window).load(function(){
  jQuery('#slider').nivoSlider({
    effect:'fade',//Specify sets like:'fold,fade,sliceDown'
    pauseTime:7000,
    directionNav: false, //Next &amp; Prev
    directionNavHide: false,
    controlNav:true, //1,2,3...
    captionOpacity:1 //Universal caption opacity
  });
});