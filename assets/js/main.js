function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentaAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

//const Pikachu = new Pokemon("Pikachu", "amarillo", 100);
//const Charmander = new Pokemon("Charmander", "rojo", 20);

/*
Pikachu.atacar(Charmander);
document.write(Charmander.vida);
*/

function pelear(){
	var select1 = document.getElementById('pokemon1').value.bold();
	var select2 = document.getElementById('pokemon2').value.bold();

	if(select1 == select2){
		alert("No puedes hacer pelear al mismo Pokemon");
		return;
	}else{
		//var poderDeAtaque1 = prompt("Ingresa el poder de ataque del primer Pokemon");
		//var poderDeAtaque2 = prompt("Ingresa el poder de ataque del segundo Pokemon");

		var poke1 = new Pokemon(select1, "amarillo", 100);
		var poke2 = new Pokemon(select2, "rojo", 20);

		poke1.atacar(poke2);
		document.getElementById('pokePelea').innerHTML = select1 + " atacó a " + select2 + " y " + select2 + " tiene una vida de: " + poke2.vida;
	}	
}


/*
var pokSelect = document.getElementByClassName('pokemon');
var optionAux, nombreAux;

function renderPok(poke){
	var optionAux = document.createElement("option");
	var nombreAux = document.createTextNode(poke.nombre);
	optionAux.appendChild(nombretAux);
	pokSelect.appendChild(optionAux);
}
*/
