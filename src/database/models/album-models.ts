export interface Album extends AlbumDto {
  id: string; // uuid v4
}

export interface AlbumDto {
  name: string;
  year: number;
  artistId: string | null; // refers to Artist
}
