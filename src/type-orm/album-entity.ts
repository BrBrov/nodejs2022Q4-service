import { Album } from 'src/database/models/album-models';
import { EntitySchema } from 'typeorm';

const albumEntity = new EntitySchema<Album>({
  name: 'Album',
  columns: {
    id: {
      type: 'uuid',
      unique: true,
      primary: true,
      readonly: true,
    },
    year: {
      type: 'integer',
    },
    artistId: {
      type: 'text',
      nullable: true,
    },
  },
});

export default albumEntity;
