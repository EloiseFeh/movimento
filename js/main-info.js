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

function trocar1() {
    var imagem=document.getElementById("a");
    if(imagem.alt == "out1"){
        imagem.src = "imgs/outdoor12.png";
        imagem.alt = "out2";
    }else if (imagem.alt=="out2") {
        imagem.src = "imgs/outdoor13.png";
        imagem.alt = "out3";
    }
    else {
        imagem.src = "imgs/outdoor11.png";
        imagem.alt = "out1";
    }
}

function trocar2() {
    var imagem=document.getElementById("b");
    if(imagem.alt == "out21"){
        imagem.src = "imgs/outdoor22.png";
        imagem.alt = "out22";
    }else if (imagem.alt=="out22") {
        imagem.src = "imgs/outdoor23.png";
        imagem.alt = "out23";
    }else if (imagem.alt=="out23") {
        imagem.src = "imgs/outdoor24.png";
        imagem.alt = "out24";
    }
    else {
        imagem.src = "imgs/outdoor21.png";
        imagem.alt = "out21";
    }
}

function movimentacao() {
	var scroll = $(".wrapper").offset().left*-1;
    target = $(".anime"),
    target2 = $(".anime2"),
    target3 = $(".anime3"),
    target4 = $(".anime4"),
    target5 = $(".anime5"),
    target6 = $(".anime6"),
    target7 = $(".anime7"),
    placa = $(".anime8"),
		animationClass = 'anime-start';
  //console.log("auau "+scroll);
  //console.log(target);
  //console.log(animationClass);
 
  function animeScroll(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador;
  classe.each(function(){
  	var itemLeft = $(this).offset().left;
  	console.log(itemLeft);
      if (scroll-offset > itemLeft) {
  		$(this).addClass(animationClass);
  	}
    else{
  		$(this).removeClass(animationClass);
  	}
  })
}

animeScroll(target,11.5,4);
animeScroll(target2,16,4);
animeScroll(target3,19,4);
animeScroll(target4,28,4);
animeScroll(target5,22,4);
animeScroll(target6,30,4);
animeScroll(target7,32,4);
animeScroll(placa,10,4);

}




