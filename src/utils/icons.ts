export const pokeIcons = {
  fire: "fa-fire",
  water: "fa-water",
  grass: "fa-leaf",
  electric: "fa-bolt",
  psychic: "fa-brain",
  ice: "fa-snowflake",
  dragon: "fa-dragon",
  dark: "fa-moon",
  fairy: "fa-magic",
  ghost: "fa-ghost",
  ground: "fa-mountain",
  normal: "fa-regular fa-star",
  fighting: "fa-fist-raised",
  flying: "fa-dove",
  bug: "fa-bug",
  poison: "fa-skull-crossbones",
  rock: "fa-gem",
  steel: "fa-shield-alt",
} as const;

export type PokeIconsType = typeof pokeIcons;
export type PokeType = keyof PokeIconsType;