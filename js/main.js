(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

  $('#imageUpload').change(function(){
    const file = $(this)[0].files[0]
      const fileReader = new FileReader()
      fileReader.onloadend = function(){
        $('#imagePreview').attr('src', fileReader.result)
      }
      fileReader.readAsDataURL(file) 
  });
})(jQuery);

function endPoint_API(){
	window.location.href = '/Image.html'		
}


