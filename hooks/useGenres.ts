import { titleCase } from 'utilities';

export const useGenres = (genres: string[]) =>
    genres.map((genre) => titleCase(genre));
