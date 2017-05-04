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
const Pikachu = new Pokemon("Pikachu", "amarillo", 100);
const Charmander = new Pokemon("Charmander", "rojo", 20);

Pikachu.atacar(Charmander);
document.write(Charmander.vida);
