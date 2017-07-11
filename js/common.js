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

	var cube3 = $('#cube3').get(0);
	var parallaxCube3 = new Parallax(cube3, {
		invertX: false,
		invertY: false
	});

	var cube4 = $('#cube4').get(0);
	var parallaxCube4 = new Parallax(cube4, {
		invertX: false
	});

	var cube5 = $('#cube5').get(0);
	var parallaxCube5 = new Parallax(cube5);

	var key1 = $('#key1').get(0);
	var parallaxKey1 = new Parallax(key1);

	var key2 = $('#key2').get(0);
	var parallaxKey2 = new Parallax(key2);

	var dolphin1 = $('#dolphin1').get(0);
	var parallaxDolphin1 = new Parallax(dolphin1);

	var dolphin2 = $('#dolphin2').get(0);
	var parallaxDolphin2 = new Parallax(dolphin2, {
		invertX: false,
		invertY: false
	});

	var cube6 = $('#cube6').get(0);
	var parallaxCube6 = new Parallax(cube6);

	var cube7 = $('#cube7').get(0);
	var parallaxCube7 = new Parallax(cube7, {
		invertX: false,
		invertY: false
	});

	var youtubeLike3 = $('#youtube-like3').get(0);
	var parallaxYoutubeLike3 = new Parallax(youtubeLike3, {
		invertX: false
	});

	var likeButton2 = $('#like-button2').get(0);
	var parallaxLikeButton2 = new Parallax(likeButton2, {
		invertY: false
	});

	var youtubeLike = $('#youtube-like').get(0);
	var parallaxYoutubeLike = new Parallax(youtubeLike, {
		invertX: false,
		invertY: false
	});

	var cube8 = $('#cube8').get(0);
	var parallaxCube8 = new Parallax(cube8, {
		invertX: false
	});

	var likeButton3 = $('#like-button3').get(0);
	var parallaxLikeButton3 = new Parallax(likeButton3, {
		invertY: false
	});

	var cube2 = $('#cube2').get(0);
	var parallaxCube2 = new Parallax(cube2, {
		invertX: false,
		invertY: false
	});

	var likeButton = $('#like-button').get(0);
	var parallaxLikeButton = new Parallax(likeButton, {
		invertX: false
	});

	var youtubeLike2 = $('#youtube-like2').get(0);
	var parallaxYoutubeLike2 = new Parallax(youtubeLike2, {
		invertY: false
	});

	var cube1 = $('#cube1').get(0);
	var parallaxCube1 = new Parallax(cube1, {
		invertX: false,
		invertY: false
	});

	var border = $('#border').get(0);
	var parallaxBorder = new Parallax(border, {
		invertY: false
	});

	$('.section3').mousemove(function(e) {
		if($(this).hasClass('fp-completely')) {
			var wind = $(window),
				x = wind.width()/2,
				y = wind.height()/2,
				rotateY = -(e.clientX - x)/x*10,
				rotateX = (e.clientY - y)/y*10;

			$('.s-img img').css({
				transform: 'perspective(300px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
				transition: 'none'
			})
		}
	})

	$('.section3').mouseout(function() {
		$('.s-img img').css({
			transform: 'perspective(300px)',
			transition: 'all 0.7s'
		})
	})

	$('.section1').mousemove(function(e) {
		if($(this).hasClass('fp-completely')) {
			var wind = $(window),
				x = wind.width()/2,
				y = wind.height()/2,
				rotateY = -(e.clientX - x)/x*5,
				rotateX = (e.clientY - y)/y*5;
				rotate = (e.clientX - x)/x*10;

			$('.venera img').css({
				transform: 'rotate(' + rotate + 'deg)',
				transition: 'none'
			})

			$('.letter-d img').css({
				transform: 'perspective(300px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
				transition: 'none'
			})
		}
	})

	$('.section1').mouseout(function() {
		$('.venera img').css({
			transform: 'none',
			transition: 'all 0.7s'
		})

		$('.letter-d img').css({
			transform: 'perspective(300px)',
			transition: 'all 0.7s'
		})
	})


	$('.section4').mousemove(function(e) {
		if($(this).hasClass('fp-completely')) {
			var wind = $(window),
				x = wind.width()/2,
				y = wind.height()/2,
				rotateY = -(e.clientX - x)/x*5,
				rotateX = (e.clientY - y)/y*5;

			$('.letter-b').css({
				transform: 'perspective(300px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(-50%, 50%)',
				transition: 'none'
			})
		}
	})

	$('.section4').mouseout(function() {
		$('.letter-b').css({
			transform: 'perspective(300px) translate(-50%, 50%)',
			transition: 'all 0.7s'
		})
	})


	$('.section2').mousemove(function(e) {
		if($(this).hasClass('fp-completely')) {
			var wind = $(window),
				x = wind.width()/2,
				y = wind.height()/2,
				rotateY = -(e.clientX - x)/x*10,
				rotateX = (e.clientY - y)/y*10;

			$('.letter-c img').css({
				transform: 'perspective(300px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
				transition: 'none'
			})
		}
	})

	$('.section2').mouseout(function() {
		$('.letter-c img').css({
			transform: 'perspective(300px)',
			transition: 'all 0.7s'
		})
	})
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");

});

function mobileMenuToggle(){
	var mobileList = document.querySelector('div.mobile-list');
	mobileList.classList.toggle('visible');
}

document.querySelector('i.fa').addEventListener('click', mobileMenuToggle);
