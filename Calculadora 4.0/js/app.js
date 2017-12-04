var calculadora = {
	agregarNumero: function(num){
		var pantalla=$("#display").html();
		if (pantalla==null || pantalla=="0") {
			$("#display").html(num);
		}else{
			$("#display").html(pantalla+num);
		}
	},

	limpiarPantalla: function(){
		$("#display").html("0");
	},

	agregarPunto: function(){
		var pantalla=$("#display").html();
		if (pantalla.indexOf(".")== -1) {
			$("#display").html(pantalla+".");
		}
	},

	agregarSigno: function(){
		var pantalla=$("#display").html();
		if (pantalla!="0") {
			if (pantalla.indexOf("-") == -1) {
			$("#display").html("-"+pantalla);
			}else{
			$("#display").html(pantalla.substring(1,pantalla.length));
			}
		}
	},

	cantidadDigitos:function(){
		var pantalla=$("#display").html();

		if (pantalla.length>8) {
			console.log("bloquear display");
			$("display").html(pantalla.substring (0,8));
		}
	},

	mediaOperacion: function(){
		$("#display").html("");
	},

	sumar: function(num1, num2){
		var result=eval(num1)+eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	restar: function(num1,num2){
		var result=eval(num1)-eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	multiplicar: function(num1,num2){
		var result=eval(num1)*eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	dividir: function(num1,num2){
		var result=eval(num1) / eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	raizfun: function(num){
		var resul=Math.sqrt(num);
		var tam=resul.toString().length;
		if(tam>8){
			$('#display').html(resul.toFixed(5));
		}else{
			$('#display').html(resul);
		}
	},

	inicicializacion: function(){
		$(".tecla").click(function(){
			var alt=$(this).attr('alt');
			if (alt!="punto" && alt!="signo" && alt!="raiz" && alt!="dividido" && alt!="por" && alt!="menos" && alt!="igual" && alt!="mas") {
				calculadora.agregarNumero(alt);
				calculadora.cantidadDigitos();
			}
		});

		$('#on').click(function(){
			calculadora.limpiarPantalla();
		});
		$('#punto').click(function(){
			calculadora.agregarPunto();
		});
		$('#sign').click(function(){
			calculadora.agregarSigno();
		});
		var n1;
		var op="";
		$('#mas').click(function(){
			n1=$('#display').html();
			calculadora.mediaOperacion();
			op="suma";
		});
		$('#menos').click(function(){
			n1=$('#display').html();
			calculadora.mediaOperacion();
			op="resta";
		});
		$('#por').click(function(){
			n1=$('#display').html();
			calculadora.mediaOperacion();
			op="multiplicacion";
		});
		$('#dividido').click(function(){
			n1=$('#display').html();
			calculadora.mediaOperacion();
			op="division";
		});
		$('#raiz').click(function(){
			n1=$('#display').html();
			var valor=$('#display').html();
			if(valor!="0"){
				if(valor.indexOf("RAIZ") == -1){
					$('#display').html("RAIZ("+valor+")");
				}else{
					$('#display').html(valor.substring(5,valor.length-1));
				}
			}
			op="raiz";
		});

		$('#igual').click(function(){
			var n2=$('#display').html();
			console.log(n1+" "+n2);
			if (op=="suma") {
				calculadora.sumar(n1,n2);
			}
			if (op=="resta") {
				calculadora.restar(n1,n2);
			}
			if (op=="multiplicacion") {
				calculadora.multiplicar(n1,n2);
			}
			if (op=="division") {
				calculadora.dividir(n1,n2);
			}
			if (op=="raiz") {
				calculadora.raizfun(n1);
			}
		});
	
	}
};
calculadora.inicicializacion();