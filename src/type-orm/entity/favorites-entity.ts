import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import ArtistEntity from './artist-entity';
import AlbumEntity from './album-entity';
import TrackEntity from './track-entity';

abstract class FavoritesEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
}

@Entity()
export class FavoritesArtistsEntity extends FavoritesEntity {
  @Column({ type: 'uuid', name: 'artist_ID' })
  artistId: string;

  @ManyToOne(() => ArtistEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'artist_ID', referencedColumnName: 'id' })
  artist: ArtistEntity;
}

@Entity()
export class FavoritesAlbumsEntity extends FavoritesEntity {
  @Column({ type: 'uuid', name: 'album_ID' })
  albumId: string;

  @ManyToOne(() => AlbumEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'album_ID', referencedColumnName: 'id' })
  album: AlbumEntity;
}

@Entity()
export class FavoritesTracksEntity extends FavoritesEntity {
  @Column({ type: 'uuid', name: 'track_ID' })
  trackId: string;

  @ManyToOne(() => TrackEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'track_ID', referencedColumnName: 'id' })
  track: TrackEntity;
}
