export const pokeTypes = [
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "ghost",
  "ground",
  "normal",
  "fighting",
  "flying",
  "bug",
  "poison",
  "rock",
  "steel"
] as const;

export type PokeType = typeof pokeTypes[number];