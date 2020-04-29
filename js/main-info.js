/**
 * @author Container Digital Jr <containerdigitaljr@gmail.com>
 */

window.addEventListener('scroll', () => {
	console.log('scroll');

	var window_width = $(window).width() - $('#object').width();



	 var document_height = $(document).height() - $(window).height();

	 var scroll_position = $(window).scrollTop();

        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'left': object_position_left
        });

});

function movimentacao() {
  console.log($(".wrapper").offset().left * -1);
}

