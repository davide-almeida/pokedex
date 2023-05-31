export type PokemonInfo = {
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
  types: Array<pokeIcons>;
};

type Ability = {
  ability: {
    name: string;
  };
}

type pokeIcons = {
  type: {
    name: string;
  }
}

export type PokeIcons = {
  [key: string]: string;
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