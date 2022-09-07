(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function () {

		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});


})(jQuery);

$(document).ready(function () {
	$('form input').change(function () {
		$('form p').text(this.files.length + " Arquivo(s) Selecioando");
	});
});

function Enviar() {
	$.ajax({
		url: '',
		type: 'POST',
		dataType: 'html',
		data: {
			id: '1'
		},
		success: function (data) {
			if (data == 'voted') {
				$('.set-result').html('you already voted. try again after 24 hours');
			} else {
				$('.set-result').html('successfully voted');
			}
		}
	});
}
// function endPoint_API() {
// 	window.location.href = '/Image.html'
// }


