var pokemon = []; //arreglo de pokémon

//Pokémon Constructor
function Pokemon (nombre, tipo, vida, poderDeAtaque) {
	this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
	this.tipo = tipo;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.nivelDeAmistad = 70;

	this.imagen = function(){
		return "<img src='assets/gif/" + this.nombre + ".gif'>";
	};

	this.mostrarPokemon = function () {
		return "Hola, soy: <b>" + this.nombre + "</b> y soy de tipo: <b>" + this.tipo + "</b>";
	}

	this.aumentarAmistad = function (valor) {
		this.nivelDeAmistad += valor; // = this.nivelDeAmistad + valor;
	}

	this.atacar = function (pokemon) {
		pokemon.vida -= this.poderDeAtaque;
	}
}


//función para crear pokémons y añadirlos en arreglo (data.js)
listaDePokemon();


//función para añadir a Select los pokémons creados
function llenarSelect (idSelect, arrayPokemon) {
	var select = document.getElementById(idSelect);
	var optionAux, nodeAux;

	arrayPokemon.forEach(function(element) {
		optionAux = document.createElement("option");
		nodeAux = document.createTextNode(element.nombre); //optionAux.innerHTML = element.nombre;
		
		optionAux.appendChild(nodeAux);
		select.appendChild(optionAux);
	}); 
}


var select1 = document.getElementById('pokemon1');
var select2 = document.getElementById('pokemon2');
var resultado1 = document.getElementById('pokePelea1');
var resultado2 = document.getElementById('pokePelea2');
var mostrarPoke1 = document.getElementById('pokeInfo1');
var mostrarPoke2 = document.getElementById('pokeInfo2');

//función batalla pokémon
function pelear() {
	var pokemon1 = pokemon.filter(function(index) {
		return index.nombre == select1.value;
	})[0];

	var pokemon2 = pokemon.filter(function(index) {
		return index.nombre == select2.value;
	})[0];

	if (pokemon1 === pokemon2) {
		alert("No puedes hacer pelear al mismo Pokémon.");
	} else if (pokemon2.vida <= 0) {
		alert(pokemon2.nombre + " no se puede atacar. \nEl pokémon ganador es " + pokemon1.nombre + ".");
	} else if (pokemon1.vida <= 0){
		alert(pokemon1.nombre + " está fuera de combate. \nEl pokémon ganador es " + pokemon2.nombre + ".")
	}else {
		pokemon1.atacar(pokemon2);
		resultado1.innerHTML = "<b>" + pokemon1.nombre + "</b> atacó a <b>" + pokemon2.nombre + "</b><br>" + pokemon2.nombre + " tiene una vida de: <b>" + pokemon2.vida + "</b>";
		
		if (pokemon2.vida <=0 ) {
			resultado2.innerHTML = pokemon2.nombre + " no puede atacar";
		} else {
			pokemon2.atacar(pokemon1);
			resultado2.innerHTML = "<b>" + pokemon2.nombre + "</b> atacó a <b>" + pokemon1.nombre + "</b><br>" + pokemon1.nombre + " tiene una vida de: <b>" + pokemon1.vida + "</b>";	
		}
	}
}


//función que muestra información del pokémon seleccionado en Select 1
function mostrarPokemonSeleccionado(){
	var pokemon1 = pokemon.filter(function(index) {
		return index.nombre == select1.value;
	})[0];

	console.log(select1);
	console.log(pokemon1);
	
	mostrarPoke1.innerHTML = pokemon1.mostrarPokemon() + "<br>Vida: <b>" + pokemon1.vida + "</b><br>Poder de Ataque: <b>" + pokemon1.poderDeAtaque + "</b><br>" + pokemon1.imagen();
}
	

//función que muestra información del pokémon seleccionado en Select 2
function mostrarPokemonRival(){
	var pokemon2 = pokemon.filter(function(index) {
		return index.nombre == select2.value;
	})[0];

	console.log(select2);
	console.log(pokemon2);

	mostrarPoke2.innerHTML = "<b>" + pokemon2.nombre + "</b><br>Tipo: <b>" + pokemon2.tipo + "</b><br>Vida: <b>" + pokemon2.vida + "</b><br>Poder de Ataque: <b>" + pokemon2.poderDeAtaque + "</b><br>" + pokemon2.imagen();
}
