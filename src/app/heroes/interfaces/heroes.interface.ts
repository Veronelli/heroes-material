export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
export interface Hero {
    id?: string | number;
    superhero: string;
    publisher: Publisher;
    alter_ego: string;
    first_appearance: string;
    characters: string;
    alt_img?: string;
}
