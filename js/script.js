$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots:true,
		slidesToShow: 3,
		infinite: true,
		initialSlide: 6,
		autoplay: true,
		autoplaySpeed: 4500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover: true,
		responsive:[
			{
				breakpoint: 1081,
				settings:{
					slidesToShow:1,
				}
			}
		]
	});
});