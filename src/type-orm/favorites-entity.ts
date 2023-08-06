import { Favorites } from 'src/database/models/favorite-models';
import { EntitySchema } from 'typeorm';

const favoritesEntity = new EntitySchema<Favorites>({
  name: 'Favorites',
  columns: {
    artists: {
      type: 'text',
      array: true,
    },
    albums: {
      type: 'text',
      array: true,
    },
    tracks: {
      type: 'text',
      array: true,
    },
  },
});

export default favoritesEntity;
