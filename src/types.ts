import type { PokeType } from "./utils/icons";

export type PokemonInfo = {
  id: number;
  name: string;
  // abilities: Array<{ ability: { name: string } }>
  abilities: Array<Ability>;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: PokeType;
    }
  }>;
};

type Ability = {
  ability: {
    name: string;
  };
}

export type pokeDataType = {
  results: Array<{
    name: string;
    url: string;
  }>;
}

export type Header = {
  title: string;
}

export type Home = {
  title: string;
}

export type Footer = {
  title: string;
}