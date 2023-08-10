import { IsNumber, IsString, ValidateIf } from 'class-validator';

export class AlbumDto {
  @IsString()
  name: string;

  @IsNumber()
  year: number;

  @IsString()
  @ValidateIf((_object, value) => value !== null)
  artistId: string | null; // refers to Artist
}

export class Album extends AlbumDto {
  id: string; // uuid v4
}
