console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for ( var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");


	var alturaEhValida = true;
	var pesoEhValido = true;

	if(peso <= 0 || peso > 1000){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3){
	    console.log("Altura inválida");
	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
	    var imc = peso / ( altura * altura);    
	    tdImc.textContent = imc.toFixed(2);
	}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var valorNome = form.nome.value;
    var valorPeso = form.peso.value;
    var valorAltura = form.altura.value;
    var valorGordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = valorNome;
    pesoTd.textContent = valorPeso;
    alturaTd.textContent = valorAltura;
    gorduraTd.textContent = valorGordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    

});

