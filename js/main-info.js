/**
 * @author Container Digital Jr <containerdigitaljr@gmail.com>
 */

window.onload = function() {
   $("#popup-intro").modal();
   $("#intro-content").css("display", "flex");
   $("#div-button").css("display", "flex");
};


// FUNÇÕES PARA FIXAR ELEMENTOS NO SCROLL

window.addEventListener("scroll", () => {

  var window_width = $(window).width() - $("#lancet").width();

  var document_height = $(document).height() - $(window).height();

  var scroll_position = $(window).scrollTop();

  var object_position_left = window_width * (scroll_position / document_height);
  $("#lancet").css({
    left: object_position_left
  });
});

window.addEventListener("scroll", () => {

  var window_width = $(window).width() - $(".retorno").width();

  var document_height = $(document).height() - $(window).height();

  var scroll_position = $(window).scrollTop();

  var object_position_left = window_width * (scroll_position / document_height);
  $(".retorno").css({
    left: object_position_left
  });
});

//FUNÇÕES RESPONSÁVEIS PELA TROCA DE CONTEUDO DOS OUTDOORS COM O CLICK
function trocar1() {
    var imagem=document.getElementById("outdoor11");
    if(imagem.alt == "outdoor11"){
        imagem.src = "imgs/outdoors1/outdoor12.png";
        imagem.alt = "outdoor12";
    }else if (imagem.alt=="outdoor12") {
        imagem.src = "imgs/outdoors1/outdoor13.png";
        imagem.alt = "outdoor13";
    }
    else {
        imagem.src = "imgs/outdoors1/outdoor11.png";
        imagem.alt = "outdoor11";
    }
}

function trocar2() {
  var imagem = document.getElementById("outdoor21");
  if (imagem.alt == "outdoor21") {
    imagem.src = "imgs/outdoors2/outdoor22.png";
    imagem.alt = "outdoor22";
  } else if (imagem.alt == "outdoor22") {
    imagem.src = "imgs/outdoors2/outdoor23.png";
    imagem.alt = "outdoor23";
  } else if (imagem.alt == "outdoor23") {
    imagem.src = "imgs/outdoors2/outdoor24.png";
    imagem.alt = "outdoor24";
  } else {
    imagem.src = "imgs/outdoors2/outdoor21.png";
    imagem.alt = "outdoor21";
  }
}


function movimentacao() {
  var scroll = $(".wrapper").offset().left * -1;
    (target = $(".anime-outdoor1")),
    (target2 = $(".anime-texto1")),
    (target3 = $(".anime-texto2")),
    (target4 = $(".anime-texto3")),
    (target5 = $(".anime-texto4")),
    (target6 = $(".anime-outdoor2")),
    (target7 = $(".anime-holograma1")),
    (target8 = $(".anime-holograma2")),
    (target9 = $(".anime-holograma3")),
    (target10 = $(".anime-meteoro")),
    (target11 = $(".anime-palco")),
    (target12 = $(".anime-manu")),
    (animationClass = "anime-start");



//FUNÇÃO QUE MUDA O OUTDOOR DE TAMANHO

function mudaOutdoor1(classe,num1,denominador,num2){
    var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll+offset > itemLeft && scroll+fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#outdoor").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#outdoor").css("display", "block");
          }
     })

}

function mudaOutdoor2(classe,num1,denominador,num2){
    var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll+offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#outdoor2").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#outdoor2").css("display", "block");
          }
     })

}
//ANIMAÇÃO DOS HOLOGRAMAs DA SESSAO3
function animeHolograma(classe,num1,denominador,num2){
    var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
        
          }else{
            $(this).removeClass(animationClass);
          }
     })

}

/*ANIMAÇÃO DOS TEXTOS*/

 function animeTexto(classe, num1, denominador,num2){
  var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll+offset > itemLeft && scroll+fim<itemLeft) {
             $(this).addClass(animationClass);
        
          }else{
            $(this).removeClass(animationClass);
          }
     })

}

  // FUNÇÕES QUE GERA A ANIMAÇÃO DO METEORO EXPLODINDO E SURGINDO PALCO COM A MANU
  function animeMeteoro(classe, numerador, denominador) {
    var offset = ($(window).width() * numerador) / denominador;
    classe.each(function() {
        var itemLeft = $(this).offset().left;
          console.log(itemLeft);
          if (scroll - offset > itemLeft) {
            $(this).addClass(animationClass);
          } else {
            $(this).removeClass(animationClass);
      }
    });
  }


function animePalco(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador; 
  classe.each(function(){
    var itemLeft = $(this).offset().left;
    console.log(itemLeft);
      if (scroll-offset > itemLeft) {

          $(this).addClass(animationClass);
          $("#meteoro").css("display","none");

    }
  })
}
function animeManu(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador; 
  classe.each(function(){
    var itemLeft = $(this).offset().left;
    console.log(itemLeft);
      if (scroll-offset > itemLeft) {

          $(this).addClass(animationClass);

    }
  })
}

 

  mudaOutdoor1(target,15,4,12.5);
  animeTexto(target2,11,4,9);
  animeTexto(target3,8,4,6)
  animeTexto(target4,5.5,4,4);
  animeTexto(target5,3.5,4,1);
  mudaOutdoor2(target6, 0.6, 4,2.5);
  animeHolograma(target7,2,4,4.5);
  animeHolograma(target8, 6, 4,8);
  animeHolograma(target9, 9, 4,11);
  animeMeteoro(target10,12,4);
  setTimeout(function(){animePalco(target11,12,4);}, 2600);
  setTimeout(function(){animeManu(target12,12,4);}, 2600);

}
