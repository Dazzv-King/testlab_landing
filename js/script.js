$(document).ready(function(){
	$('.comments').slick({
		arrows:true,
		dots:true,
		adaptiveheight:false,
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:true,
		draggable:false,
		swipe:true,
		variablewidth:true,
		responsive:[
			{
				breakpoint: 980,
				settings: {
					slidesToShow:2,
					arrows:false
				}
			},{
				breakpoint: 400,
				settings: {
					slidesToShow:1,
					arrows:false,
					variablewidth:false,
					autoplay:false
				}
			}
		]

	});
});

$(document).ready(function() {
	$('.burger_menu').click(function(event) {
		$('.burger_menu, .menu_option').toggleClass('active');
		$('body').toggleClass('lock'); //заблокировал скроллинг когда открыт бургер//
	});
});
$(document).ready(function() {
	$('.block_title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});