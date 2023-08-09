import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class FavoritesEntity {
  @PrimaryColumn({ type: 'text', array: true, default: [] })
  artists: string[];

  @PrimaryColumn({ type: 'text', array: true, default: [] })
  albums: string[];

  @PrimaryColumn({ type: 'text', array: true, default: [] })
  tracks: string[];
}
