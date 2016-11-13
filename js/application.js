$.fn.scrollView = function (selector) {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1000);
  });
}
$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
