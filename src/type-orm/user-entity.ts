import { User } from 'src/database/models/user-models';
import { EntitySchema } from 'typeorm';

const userEntity = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      unique: true,
      readonly: true,
    },
    login: {
      type: 'text',
      readonly: true,
    },
    password: {
      type: 'text',
    },
    createdAt: {
      type: 'bigint',
      createDate: true,
      readonly: true,
      default: new Date().getTime(),
    },
    updatedAt: {
      type: 'bigint',
      updateDate: true,
      default: new Date().getTime(),
    },
    version: {
      type: 'bigint',
      version: true,
      default: 1,
    },
  },
});

export default userEntity;
