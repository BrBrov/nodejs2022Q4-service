import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class UserAuthEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, type: 'text' })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @VersionColumn({ type: 'integer' })
  version: number;

  @CreateDateColumn({
    transformer: {
      from(date) {
        return date.getTime();
      },
      to(date) {
        return date;
      },
    },
  })
  createdAt: number;

  @UpdateDateColumn({
    transformer: {
      from(date) {
        return date.getTime();
      },
      to(date) {
        return date;
      },
    },
  })
  updatedAt: number;
}
