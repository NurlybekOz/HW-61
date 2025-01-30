export interface Country {
    name: {
        common: string;
    }
    population: number;
    capital: string;
    flags: {
        png: string;
    }
    cca3: string;
    borders: string[];
}