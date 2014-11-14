// Style Switcher
//=======================================
jQuery(document).ready(function() {
	jQuery('#navigation > li').toggle(function() {
		jQuery('#navigation').stop().animate({'marginRight':'-155px'},300);
	},function(){
		jQuery('#navigation').stop().animate({'marginRight':'0px'},300);
	});
});

jQuery(document).ready(function() {
	jQuery('<style type="text/css" id="style_switcher" />').appendTo('head');
});

jQuery('.style_1').click(function() {
	jQuery('head').append('<link rel="stylesheet" href="css/style-blue.css?ver=1.0" type="text/css" />');
	jQuery('.flip-content.iconned').each( function() {
		var randomX = Math.random();
		var rhue = Math.floor( 45*randomX ) + 15; var ghue = Math.floor( 30*randomX ) + 157; var bhue = Math.floor( 40*randomX ) + 177; 
		var hue = 'rgb(' + rhue + ',' + ghue + ',' + bhue + ')';
		jQuery(this).css({'background-color': hue}, 500);
	});	
});

jQuery('.style_2').click(function() {
	jQuery('head').append('<link rel="stylesheet" href="css/style-red.css?ver=1.0" type="text/css" />');
	jQuery('.flip-content.iconned').each( function() {
		var randomX = Math.random();
		var rhue = Math.floor( 45*randomX ) + 158; var ghue = Math.floor( 30*randomX ) + 0; var bhue = Math.floor( 40*randomX ) + 71; 
		var hue = 'rgb(' + rhue + ',' + ghue + ',' + bhue + ')';
		jQuery(this).css({'background-color': hue}, 500);
	});	
});

jQuery('.style_3').click(function() {
	jQuery('head').append('<link rel="stylesheet" href="css/style-gray.css?ver=1.0" type="text/css" />');
	jQuery('.flip-content.iconned').each( function() {
		var randomX = Math.random();
		var rhue = Math.floor( 57*Math.random() ) + 55; var ghue = Math.floor( 57*Math.random() ) + 55; var bhue = Math.floor( 57*Math.random() ) + 55; 
		var hue = 'rgb(' + rhue + ',' + ghue + ',' + bhue + ')';
		jQuery(this).css({'background-color': hue}, 500);
	});	
});

jQuery('.style_4').click(function() {
	jQuery('head').append('<link rel="stylesheet" href="css/style-orange.css?ver=1.0" type="text/css" />');
	jQuery('.flip-content.iconned').each( function() {
		var randomX = Math.random();
		var rhue = Math.floor( 75*randomX ) + 255; var ghue = Math.floor( 30*randomX ) + 138; var bhue = Math.floor( 40*randomX ) + 0; 
		var hue = 'rgb(' + rhue + ',' + ghue + ',' + bhue + ')';
		jQuery(this).css({'background-color': hue}, 500);
	});	
});

jQuery('.premade').on('click', function(e) {
	window.location = e.target.href;
});

jQuery('.menu-item:last-child').on('click', function() {
	window.location = 'http://preview.themique.com/bokeh/dark/';
});