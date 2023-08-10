import { IsBoolean, IsString } from 'class-validator';

export class ArtistDto {
  @IsString()
  name: string;

  @IsBoolean()
  grammy: boolean;
}

export class Artist extends ArtistDto {
  id: string; // uuid v4
}
