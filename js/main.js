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

})(jQuery);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {

  // var formData = new FormData();
  // var target = 
  // formData.append("file", document.getElementById("file").files[0]);
  // var xhr = new XMLHttpRequest();
  // var eventSource = xhr.upload || xhr;
  // eventSource.addEventListener("progress", function(e){
  //     var current = e.loaded || e.position ;
  //     var total = e.total || e.totalSize;
  //     var percant = parseInt((current/total)*100, 10);
     
  // });
  // xhr.open("POST", target, true);
  // xhr.send(formData);
  // xhr.onload = function() {
  //     if (this.status === 200){}
         
  // };
    readURL(this);
});