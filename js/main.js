/**
 * @author Container Digital Jr <containerdigitaljr@gmail.com>
 * Documento exclusivo para o Javascript da página de Login
 */

 
var chaveMestra = 'senha';

window.onload = function() {
  if (localStorage) {
  	var localpass = localStorage.getItem('senha');
  	$("input[type='password']").val(localpass);
  }
}



function verify(){

	if (chaveMestra) {

		var senha = document.form.chave.value;

		if (senha == '') {

			alert("Preencha os campos");
			return false;
		
		} else if (senha == chaveMestra) {
			alert('Bem vindo');

			localStorage.setItem('senha', chaveMestra);

			return true;

		} else {

			$("input[type='password']").focus().css("border", "2px solid red");

			alert('A senha está incorreta!');

			$("input[type='password']").val('');
			return false;
		}

	} else {
		alert("Não há chave de acesso registrada");
		return false;
	}
}



