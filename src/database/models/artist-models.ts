export interface Artist extends ArtistDto {
  id: string; // uuid v4
}

export interface ArtistDto {
  name: string;
  grammy: boolean;
}
