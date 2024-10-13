const listaSelecaoPokemons = document.querySelectorAll(".pokemon");

listaSelecaoPokemons.forEach(pokemon => {
	pokemon.addEventListener("click", () => {
		esconderCartaoPokemon();

		const idPokemonSelecionado = mostrarCartaoPokemonSelecionado(pokemon);

		desativarPokemonNaListagem();
		ativarPokemonSelecionadoNaListagem(idPokemonSelecionado);

	})
})


function ativarPokemonSelecionadoNaListagem(idPokemonSelecionado) {
	const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
	pokemonSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokemonNaListagem() {
	const pokemonAtivoNaListagem = document.querySelector(".ativo");
	pokemonAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokemonSelecionado(pokemon) {
	const idPokemonSelecionado = pokemon.attributes.id.value;
	const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
	const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
	cartaoPokemonParaAbrir.classList.add("aberto");
	return idPokemonSelecionado;
}

function esconderCartaoPokemon() {
	const cartaoPokemonAberto = document.querySelector(".aberto");
	cartaoPokemonAberto.classList.remove("aberto");
}

