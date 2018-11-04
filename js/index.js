// Discover Romblon by Ryu

(function($) {
	$('#searchbox input').focus(function() {
		$('#searchbox').addClass('active');	
	}).blur(function() {
		// Remove the active class if and only if there's no input.
		if ($(this).val() === '')
			$('#searchbox').removeClass('active');
	});
	
	$('#menu-toggler').click(function() {
		$(this).toggleClass('collapsed');
		
		if ($(this).hasClass('collapsed'))
			$('#caption-contents').animate({width: '100vw'}, 500);
		else
			$('#caption-contents').animate({width: '50vw'}, 500);
		
		$('#collapsible-side-menu').animate({width: 'toggle'}, 500);
		$('#sidenav-overlay').fadeToggle();
	});
	
	// Close the side nav when clicked outside of it
	$('#sidenav-overlay').click(function() {
		$('#menu-toggler').trigger('click');
	});
	
    $(window).bind('resizeEnd', function() {
		winHeight = $(window).height();
    });
	
	// Scroll reveal
	$(window).scroll(function() {
		var pageTop = $(window).scrollTop();

		$('.scroll-reveal').each(function() {
			var offset = parseInt($(this).attr('data-reveal-offset'));
			var trigger = pageTop + $(window).height() - offset;
			
			if ($(this).offset().top <= trigger) {
				$(this).addClass('visible');
			}
			else {
				$(this).removeClass('visible');
			}
		});
	});
	
	$(window).resize(function() {

		if(this.resizeTO) clearTimeout(this.resizeTO);

		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 500);

	});
	
	// Map drag
	$('#mapoverlay-heading').on('swipe', function() {
		$(this).fadeOut();
	});
	
	/* Lightbox */
	$('[data-toggle="lightbox"]').click(function(e) {
		e.preventDefault();
		$(this).ekkoLightbox();
    });
	
	$('.parallaxie').parallaxie({
		speed: 0.4
	});
	
	/*
	 * Animated headlines 
	 *------------------------------------------------
	 * https://codyhouse.co/gem/css-animated-headlines
	 */
	var animationDelay = 2500;

	animateHeadline($('.text-rotate'));

	function animateHeadline(headlines) {
	   headlines.each(function(){
		  var headline = $(this);
		  setTimeout(function(){ hideWord( headline.find('.visible') ) }, animationDelay);
	   });
	}
	
	function hideWord(word) {
	   var nextWord = takeNext(word);
	   switchWord(word, nextWord);
	   setTimeout(function(){ hideWord(nextWord) }, animationDelay);
	}

	function takeNext(word) {
	   return (!word.is(':last-child')) ? word.next() : word.parent().children().eq(0);
	}

	function switchWord(oldWord, newWord) {
	   oldWord.removeClass('visible').addClass('hidden');
	   newWord.removeClass('hidden').addClass('visible');
	}
})(jQuery);