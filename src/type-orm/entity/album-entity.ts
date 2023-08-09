import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'integer' })
  year: number;

  @Column({ type: 'text', nullable: true })
  artistId: string | null;
}
