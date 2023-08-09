import { Column, PrimaryGeneratedColumn } from 'typeorm';

export default class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  artistId: string | null;

  @Column({ type: 'text', nullable: true })
  albumId: string | null;

  @Column({ type: 'integer' })
  duration: number;
}
