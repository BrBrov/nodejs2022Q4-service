import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @VersionColumn()
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
