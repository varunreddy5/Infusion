/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function() {

	$('#alertMe').click(function(e) {
		e.preventDefault();

		$('#successAlert').slideDown();
	});

	$("ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

});