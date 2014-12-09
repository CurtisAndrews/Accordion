$(document).ready(function () {

    console.info('Create the accodion and bind event handlers here');

    $('.js-accordion-trigger').click(function() {
    	$('.accordion-bd').slideToggle(500);
    });
});
