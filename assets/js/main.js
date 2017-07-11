(function($) {

	'use strict';

	$(document).ready(function() {

		// Wave Button Effect
		Waves.attach('.btn', ['waves-button', 'waves-float']);
    	Waves.init();

    	// Slick nav menu for responsive menu
    	$("#menu").slicknav({
    		prependTo: '.main-menu'
    	});

    	// Single Team member hover effect
    	$('.single-team-col').on('mouseover', function(){
    		$(this).addClass('active').siblings().removeClass('active');
    	});

    	// Counter up Initialize
    	$('.counter').counterUp({
		    delay: 10,
		    time: 2000
		});

    	// Add and remove class on focusing and bluring on Search input
    	$('.menu-row-search-box form input[type="search"]').on('focus', function() {
    		$('.menu-row-search-box').addClass('focused');
    	}).on('blur', function() {
    		$('.menu-row-search-box').removeClass('focused');
    	});


    	// Custom Accordion
    	$('.accordion .content').hide();
    	$('.accordion.active .content').show();
    	
    	$('.accordion').on('click', function() {
    		var $this = $(this);
    		$this.toggleClass('active');
    		$this.find('.content').slideToggle();
    	});



    	// Init owl carousel for Featured Slider
		$('#featured_slider').owlCarousel({

		    loop:true,
		    margin:10,
		    nav:true,
		    center:true,
		    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		    theme: 'industri-slider-theme1',
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }

		});


    	// Init owl carousel for Testimonial Slider
		$('#tstSlider').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:true,
		    center:true,
		    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		    theme: 'industri-slider-theme1',
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

    	// Init owl carousel for Logo Slider
		$('#clientSlider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay:true,		    
		    autoplayTimeout: 2000,		    
		    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		    theme: 'industri-slider-theme1',
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items: 5
		        }
		    }
		});


		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.element-item',
		  layoutMode: 'fitRows',
		  
		});

		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  numberGreaterThan50: function() {
		    var number = $(this).find('.number').text();
		    return parseInt( number, 10 ) > 50;
		  },
		  // show if name ends with -ium
		  ium: function() {
		    var name = $(this).find('.name').text();
		    return name.match( /ium$/ );
		  }
		};

		// bind filter button click
		$('#filters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});
  
	});



})(jQuery)
