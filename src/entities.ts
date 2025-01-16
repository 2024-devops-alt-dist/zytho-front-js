/**
 * Dans ce fichiers entities, on définit à quoi ressemblent les entités en typescript 
 * telles qu'elles seront récupérées depuis le back..
 * */

export interface Beer {
    id: number;
    name: string;
    description: string;
    abv: number;
    id_brewery: number;
    id_category: number;
    category: string;
    brewery: string;
    country: string;
}

export interface Brewery {
    id: number;
    name: string;
    country: string;
}
