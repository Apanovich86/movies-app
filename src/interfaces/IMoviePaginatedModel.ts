import {IMovie} from "./movieInterface";
import {IPaginatedPageModel} from "./IPaginatedPageModel";

export interface IPagination<T> {
    total_items: number;
    total_pages: number;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
    items: IMovie[];
}