$(function() {

	$('#fullpage').fullpage({
		anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'contact'],
		menu: '#main-menu',
		navigation: true,
		css3: true,
		scrollingSpeed: 700,
		scrollBar: false,
		parallax: true,
		fadingEffect: true
	});

	$(".s-row .btn-blue").on('click', function() {
			$('.btn-blue').removeClass('active');
			$(this).addClass('active');
	});

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var scene1 = $('#scene1').get(0),
		scene2 = $('#scene2').get(0),
		scene3 = $('#scene3').get(0),
		scene4 = $('#scene4').get(0),
		scene5 = $('#scene5').get(0),
		scene6 = $('#scene6').get(0),
		scene7 = $('#scene7').get(0),
		scene8 = $('#scene8').get(0);

	var parallax1 = new Parallax(scene1);
	var parallax2 = new Parallax(scene2, {
		invertX: false,
		invertY: false
	});

	var parallax3 = new Parallax(scene3);
	var parallax4 = new Parallax(scene4, {
		invertX: false,
		invertY: false
	});

	var parallax5 = new Parallax(scene5);
	var parallax6 = new Parallax(scene6, {
		invertX: false,
		invertY: false
	});

	var parallax7 = new Parallax(scene7);
	var parallax8 = new Parallax(scene8, {
		invertX: false,
		invertY: false
	});

	var bubbles = $('#bubbles').get(0);
	var parallaxBubbles = new Parallax(bubbles);
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");

});
