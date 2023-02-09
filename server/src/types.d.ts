export type ReqBody = undefined | PokemonWithProps 

export interface Sprite {
    "front_default": string;
    other: {
        home: {
            front_default: string;
        };
    }
}

export interface PokemonWithProps {
    id: number,
    name: string,
    url: string,
    sprites: Sprite
}