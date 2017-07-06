$(document).on('click','.jsMenuTrigger',function() {
	$(this).toggleClass('_active');
	$('.jsMenuList').slideToggle('300');
	$('.jsOverlay').addClass('_active');
});

$(document).on('click','.jsOverlay._active',function() {
	$('.jsMenuList').fadeOut('fast');
	$('.jsOverlay').removeClass('_active');
})
