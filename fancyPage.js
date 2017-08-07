/**
 * fancyPage.js: to test my skills at jQuery to make a fancy "Who Am I?" page
 */

function main() {
	$('.talkBlock').hide();
	$('.talkText').hide();
	$('.talkBlock').fadeIn(1000);
	$('.talkHead').on('click', function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(500);
	});
}
$(document).ready(main);