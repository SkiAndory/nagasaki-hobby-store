import OnePieceCharacter from "./one-piece/character.png";
import OnePieceLogo from "./one-piece/logo.png";
import OnePieceBackground from "./one-piece/background.png";

import PokemonCharacter from "./pokemon/character.png";
import PokemonLogo from "./pokemon/logo.png";
import PokemonBackground from "./pokemon/background.png";

import YuGiOhCharacter from "./yu-gi-oh/character.png";
import YuGiOhLogo from "./yu-gi-oh/logo.png";
import YuGiOhBackground from "./yu-gi-oh/background.png";

import DigimonCharacter from "./digimon/character.png";
import DigimonLogo from "./digimon/logo.png";
import DigimonBackground from "./digimon/background.png";

import StarWarsCharacter from "./star-wars/character.png";
import StarWarsLogo from "./star-wars/logo.png";
import StarWarsBackground from "./star-wars/background.png";

const BRANDS = [
	{
		label: "One Piece",
		character: OnePieceCharacter,
		logo: OnePieceLogo,
		background: OnePieceBackground,
		key: crypto.randomUUID(),
	},
	{
		label: "Pokémon",
		character: PokemonCharacter,
		logo: PokemonLogo,
		background: PokemonBackground,
		key: crypto.randomUUID(),
	},
	{
		label: "Yu-Gi-Oh!",
		character: YuGiOhCharacter,
		logo: YuGiOhLogo,
		background: YuGiOhBackground,
		key: crypto.randomUUID(),
	},
	{
		label: "Digimón",
		character: DigimonCharacter,
		logo: DigimonLogo,
		background: DigimonBackground,
		key: crypto.randomUUID(),
	},
	{
		label: "Star Wars",
		character: StarWarsCharacter,
		logo: StarWarsLogo,
		background: StarWarsBackground,
		key: crypto.randomUUID(),
	},
];

export default BRANDS;
