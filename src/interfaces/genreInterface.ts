export interface IGenre {
    id: number;
    name: string;
}

export interface GenresResponseModel {
    genres: IGenre[]
}