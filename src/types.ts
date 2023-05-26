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
};

type Ability = {
  ability: {
    name: string;
  };
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