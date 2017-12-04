var calculadora={
	agregarNumero: function(num){
		var pantalla=$("#display").html();
		if (pantalla==null || pantalla=="0") {
			$("#display").html(num);	
		}else{
			$("display").html(pantalla+num);
		}
		
	},

	limpiar: function(){
		$("#display").html("0");
	},
	colocarPunto: function(){
		var pantalla=$("#display").html();
		if (pantalla.indexOF(".")==-1) {
			$("#display").html(pantalla+".")
		}
	}
}
$(".tecla").click(function(){
	var alt=$(this).attr('alt');
	if (alt!="punto") {
		calculadora.agregarNumero(alt);
	}
});