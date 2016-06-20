function validar(){
	var ok = true;
	
	//regex
	var inteiro = /^\d+$/;
	var decimal = /^\d{1,3}(\.\d{3})*\,\d{2}$/;
	var palavra = /^[a-zA-Z\s]*$/;
	
	//aceita apenas numeros 
	if(codigoMercadoria.value == "" || !inteiro.test(codigoMercadoria.value)){
		 codigoMercadoria.style.border = "1px solid red";
		 codMercadoria.style.color = "red";
		 erroCodigo.innerHTML = "Preencha o codigo corretamente.";
		 ok = false;
	}else{
		 codigoMercadoria.style.border = "1px solid silver";
		 codMercadoria.style.color = "silver";
		 erroCodigo.innerHTML = "";
	}
	
	//aceita apenas palavras
	if(tipoMercadoria.value == "" || !palavra.test(tipoMercadoria.value)){
		 tipoMercadoria.style.border = "1px solid red";
		 tipoMerc.style.color = "red";
		 erroTipoMercadoria.innerHTML = "Preencha o tipo de mercadoria corretamente.";
		 ok = false;
	}else{
		 tipoMercadoria.style.border = "1px solid silver";
		 tipoMerc.style.color = "silver";
		 erroTipoMercadoria.innerHTML = "";
	}
	 
	//aceita apenas palavras 
	if(nomeMercadoria.value == "" || !palavra.test(nomeMercadoria.value)){
		 nomeMercadoria.style.border = "1px solid red";
		 nomeMerc.style.color = "red";
		 erroNomeMercadoria.innerHTML = "Preencha o nome da mercadoria corretamente.";
		 ok = false;
	}else{
		 nomeMercadoria.style.border = "1px solid silver";
		 nomeMerc.style.color = "silver";
		 erroNomeMercadoria.innerHTML = "";
	}
	
	//aceita apenas numero 
	if(quantidade.value == "" || !inteiro.test(quantidade.value)){
		 quantidade.style.border = "1px solid red";
		 quant.style.color = "red";
		 erroQuantidade.innerHTML = "Preencha a quantidade corretamente.";
		 ok = false;
	}else{
		 quantidade.style.border = "1px solid silver";
		 quant.style.color = "silver";
		 erroQuantidade.innerHTML = "";
	}
	 
	 //aceita apenas preços no formato decimal/
	if(preco.value == "" || !decimal.test(preco.value)){
		 preco.style.border = "1px solid red";
		 pre.style.color = "red";
		 erroPreco.innerHTML = "Digite o preco corretamente.";
		 ok = false;
	}else{
		 preco.style.border = "1px solid silver";
		 pre.style.color = "silver";
		 erroPreco.innerHTML = "";
	}
	
	//verifica se selecionou algum item 
	if(tipoNegocio.value == ""){
		  tipoNegocio.style.border = "1px solid red";
		  tipoN.style.color = "red";
		  erroTipoNegocio.innerHTML = "Selecione um tipo de negocio.";
		  ok = false;
	}else{
		  tipoNegocio.style.border = "1px solid silver";
		  tipoN.style.color = "silver";
		  erroTipoNegocio.innerHTML = "";
	}
	
	//mostra erro no inicio do formulario 
	if(ok == false){
		 erroFormulario.innerHTML = "Por favor, preencha os campos corretamente.";
	}
	
	
	return ok;
}