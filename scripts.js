var menuLinkHoverClassName = 'menu__link--hover';

function subTitleAnimation() {
	var title1 = new TimelineMax(); 

	title1.staggerFromTo(".sub__title span", 0.5, 
	{ease: Back.easeOut.config(0), opacity: 0, bottom: -80},
	{ease: Back.easeOut.config(0), opacity: 1, bottom: 0}, 0.1);
  }

function mouseHandler() {
	$(this).find('.menu__link--underline').toggleClass(menuLinkHoverClassName);
} 

$(document).ready(function() {
	// main carousel 
	$('.bgs__container').slick({
		dots: true,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		fade: true,	
		centerMode: true,	
		
	});

	// hamburger menu animation
	$('#navIcon').click(function(){
		$(this).toggleClass('open');
		
 		$('.menu__section').toggleClass('on');
	});

	// sub title animation
	$(".sub__title").lettering();
	setTimeout(subTitleAnimation, 3000);

	$('.menu__link').each(function() {
		$(this).hover(mouseHandler);
  });
});
