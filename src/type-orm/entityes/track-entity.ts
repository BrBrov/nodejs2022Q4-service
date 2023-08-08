import { Track } from 'src/database/models/track-models';
import { EntitySchema } from 'typeorm';

const trackEntity = new EntitySchema<Track>({
  name: 'Track',
  columns: {
    id: {
      type: 'uuid',
      readonly: true,
      unique: true,
      primary: true,
    },
    name: {
      type: 'text',
    },
    artistId: {
      type: 'text',
      nullable: true,
    },
    albumId: {
      type: 'text',
      nullable: true,
    },
    duration: {
      type: 'integer',
    },
  },
});

export default trackEntity;
