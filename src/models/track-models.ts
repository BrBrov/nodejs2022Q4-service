import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

export class TrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((_object, value) => value !== null)
  artistId: string | null; // refers to Artist

  @IsNotEmpty()
  @IsString()
  @ValidateIf((_object, value) => value !== null)
  albumId: string | null; // refers to Album

  @IsNotEmpty()
  @IsNumber()
  duration: number; // integer number
}

export class Track extends TrackDto {
  id: string; // uuid v4
}
