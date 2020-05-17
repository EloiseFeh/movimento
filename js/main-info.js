/**
 * @author Container Digital Jr <containerdigitaljr@gmail.com>
 */

window.addEventListener("scroll", () => {
  console.log("scroll");

  var window_width = $(window).width() - $("#lancet").width();

  var document_height = $(document).height() - $(window).height();

  var scroll_position = $(window).scrollTop();

  var object_position_left = window_width * (scroll_position / document_height);
  $("#lancet").css({
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
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#outdoor2").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#outdoor2").css("display", "block");
          }
     })

}
//FUNÇÕES QUE MUDAM PREDIO P/ HOLOGRAMA DA SESSAO3
function mudaPredio1(classe,num1,denominador,num2){
    var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#predio1").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#predio1").css("display", "block");
          }
     })

}
function mudaPredio2(classe,num,denominador,num2){
    var offset = $(window).width()*num/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#predio2").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#predio2").css("display", "block");
          }
     })

}
function mudaPredio3(classe,num1,denominador,num2){
    var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#predio3").css("display", "none");
        
          }else{
            $(this).removeClass(animationClass);
              $("#predio3").css("display", "block");
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
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
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

 

  mudaOutdoor1(target,3.5,4,0.5);
  animeTexto(target2,0.5,4,3);
  animeTexto(target3,3,4,6)
  animeTexto(target4,6,4,7.5);
  animeTexto(target5,7.5,4,10.5);
  mudaOutdoor2(target6, 10.5, 4,13.5);
  mudaPredio1(target7,10,4,13.5);
  mudaPredio2(target8, 15.5, 4,18);
  mudaPredio3(target9, 19, 4,21);
  animeMeteoro(target10,19,4);
  setTimeout(function(){animePalco(target11,19,4);}, 3000);
  setTimeout(function(){animeManu(target12,19,4);}, 3000);

}
