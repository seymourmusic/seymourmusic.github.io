$(window).ready(function() {
	$(".about-content .text").hide();
	var width = $(window).width();

	$(".bg-vid").css({
		'width' : width
	})

	var checkForMobile = function() {
		if (width <= 960) {
			$(".head h1").addClass("mobile_h1");
			$(".main-content ul li").addClass("mobile_li");
		}
		else {
			$(".head h1").removeClass("mobile_h1");
			$(".main-content ul li").removeClass("mobile_li");
		}
	}

	checkForMobile();

	$(".main-content").addClass("active-div");

	$(window).resize(function() {
		width = $(window).width();
		$(".first, .second, .third").css({
			'left' : width
		})

		$(".main-content, .contact-content").css({
			'width' : width
		})

		$(".contact-content").css({
			'right' : width
		})

		checkForMobile();
	});

	$(".first, .second, .third").css({
		'left' : width
	});
	$(".contact-content").css({
		'right' : width
	});
	$(".about").click(function() {
		$(".about-content .text").show();
		
		setTimeout(function() {
			$(".about-content .text").addClass("text-anim");
		}, 1000);

		$(".active-div").removeClass("active-div");
		$(".first").addClass("first-anim").addClass("active-div");
		$(".second").addClass("second-anim").addClass("active-div");
		$(".third").addClass("third-anim").addClass("active-div");
	});
	$(".third .exit").click(function() {
		$(".first").removeClass("first-anim").removeClass("active-div");
		$(".second").removeClass("second-anim").removeClass("active-div");
		$(".third").removeClass("third-anim").removeClass("active-div");
		setTimeout(function() {
			$(".contact-anim").removeClass("contact-anim");
		}, 1000);
	});
	$(".contact").click(function() {
		$(".contact-content").addClass("contact-anim");
		setTimeout(function() {
			$(".image-links").addClass("icon-anim");
		}, 1000);
	});
	$(".contact-content .exit").click(function() {
		$(".icon-anim").removeClass("icon-anim");
		setTimeout(function() {
			$(".contact-anim").removeClass("contact-anim");
		}, 1000);
	});
	$(".music").click(function() {
		$(".widget").addClass("music-anim");
	});
	$(".widget .exit").click(function() {
		$(".music-anim").removeClass("music-anim");
	});
});