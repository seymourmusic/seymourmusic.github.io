$(window).ready(function() {
	alert("new site working");
	var width = $(window).width();
	$(".main-content").addClass("active-div");

	$(window).resize(function() {
		var width = $(window).width();
		$(".first, .second, .third").css({
			'left' : width
		})

		$(".main-content, .contact-content").css({
			'width' : width
		})


	});
	$(".first, .second, .third").css({
		'left' : width
	});
	$(".contact-content").css({
		'right' : width
	});
	$(".about").click(function() {
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