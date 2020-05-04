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
    (target = $(".anime")),
    (target2 = $(".anime2")),
    (target3 = $(".anime3")),
    (target4 = $(".anime4")),
    (target5 = $(".anime5")),
    (target6 = $(".anime6")),
    (target7 = $(".anime7")),
    (target8 = $(".anime-placa")),
    (target9 = $(".anime8")),
    (target10 = $(".anime-fogos1")),
    (target11 = $(".anime-fogos2")),
    (target12 = $(".anime-fogos3")),
    (target13 = $(".anime-meteoro")),
    (target14 = $(".anime-palco")),
    (target15 = $(".anime-manu")),
    (animationClass = "anime-start");


  // FUNÇÃO QUE GERA A ANIMAÇÃO SURGINDO DO NADA BASEADA NA APRROXIMAÇÃO
  function animeScroll(classe, numerador, denominador) {
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
//FUNÇÃO MUDA PLACA PNG PARA GIF DA SESSAO3
function mudaPlaca(classe,num1,denominador,num2){
  var offset = $(window).width()*num1/denominador,
    fim = $(window).width()*num2/denominador;
    classe.each(function(){
        var itemLeft = $(this).offset().left;
        console.log(itemLeft);
          if (scroll-offset > itemLeft && scroll-fim<itemLeft) {
            $(this).addClass(animationClass);
            $("#placa").css("display", "none");

          }else{
            $(this).removeClass(animationClass);
              $("#placa").css("display", "block");
          }
     })

}
 
/*FUNÇÃO DE ANIMAÇÃO DOS FOGOS*/

 function animeFogos(classe, numerador, denominador){
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
/*ANIMAÇÃO DOS TEXTOS*/

 function animeTexto1(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador; 
  classe.each(function(){
    var itemLeft = $(this).offset().left;
    console.log(itemLeft);
      if (scroll-offset > itemLeft) {

          $(this).addClass(animationClass);
          $("#fogos1").css("display","none");

    }
  })
}
function animeTexto2(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador; 
  classe.each(function(){
    var itemLeft = $(this).offset().left;
    console.log(itemLeft);
      if (scroll-offset > itemLeft) {

          $(this).addClass(animationClass);
          $("#fogos2").css("display","none");

    }
  })
}
function animeTexto3(classe, numerador, denominador){
         var offset = $(window).width()*numerador/denominador; 
  classe.each(function(){
    var itemLeft = $(this).offset().left;
    console.log(itemLeft);
      if (scroll-offset > itemLeft) {

          $(this).addClass(animationClass);
          $("#fogos3").css("display","none");

    }
  })
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
 

  mudaOutdoor1(target,3.5,4,0.5);
  setTimeout(function(){animeTexto1(target2,1,4);}, 2150);
  animeFogos(target10, 1, 4);
  setTimeout(function(){animeTexto2(target3,3,4);}, 2150);
  animeFogos(target11, 3, 4);
  setTimeout(function(){animeTexto3(target4,6.5,4);}, 2150);
  animeFogos(target12, 6.5, 4);
  mudaOutdoor2(target5, 10.5, 4,13.5);
  mudaPredio1(target6,10,4,13.5);
  mudaPlaca(target8,6.5,4,9);
  mudaPredio2(target7, 15.5, 4,18);
  mudaPredio3(target9, 19, 4,21);
  animeScroll(target13,19,4);
  setTimeout(function(){animePalco(target14,19,4);}, 3000);
  setTimeout(function(){animeScroll(target15,19,4);}, 3000);
  
}
