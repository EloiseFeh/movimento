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

        window.addEventListener('keyup', (e) => {
    	switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = object_position_left;
            break;
        case 'ArrowRight':
            circle.style.left = object_position_left;
            break;
    }
});

});

function movimentacao() {
	var scroll = $(".wrapper").offset().left*-1,
		target = $(".anime"),
		animationClass = 'anime-start',
		offset = $(window).width()*26/4;
  console.log("auau "+scroll);
  //console.log(target);
  //console.log(animationClass);
  function animeScroll(){
  target.each(function(){
  	var itemLeft = $(this).offset().left;
  	console.log(itemLeft);
  	if (scroll-offset > itemLeft) {
  		$(this).addClass(animationClass);
  	}else{
  		$(this).removeClass(animationClass);
  	}

  })
}
animeScroll();

}

let circle = document.querySelector('#object');
let moveBy = 10;
 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
    }
});

