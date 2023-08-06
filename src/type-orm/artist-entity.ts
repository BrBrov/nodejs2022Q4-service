import { Artist } from 'src/database/models/artist-models';
import { EntitySchema } from 'typeorm';

const artistEntity = new EntitySchema<Artist>({
  name: 'Artist',
  columns: {
    id: {
      type: 'uuid',
      unique: true,
      readonly: true,
      primary: true,
    },
    name: {
      type: 'text',
    },
    grammy: {
      type: 'boolean',
    },
  },
});

export default artistEntity;
