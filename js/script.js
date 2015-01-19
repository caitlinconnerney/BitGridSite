var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

$('#myCarousel2').carousel({
		interval:   4000
	});


$(function() {
 $('a[href*=#]:not([href=#myCarousel2])').click(function () { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('#newsletterForm').on('submit', function(e) {
    e.preventDefault(); //Prevents default submit
    var form = $(this); 
    var post_url = form.attr('action'); 
    var post_data = form.serialize(); //Serialized the form data for process.php
    $('#loader', form).html('<img src="http://media.giphy.com/media/IgQ8E05Dpg2ze/giphy.gif" /> Please Wait...');
    $.ajax({
        type: 'POST',
        url: 'mail.php', // Your form script
        data: post_data,
        success: function(msg) {
            $(form).fadeOut(500, function(){
                form.html(msg).fadeIn();
            });
        }
    });
});