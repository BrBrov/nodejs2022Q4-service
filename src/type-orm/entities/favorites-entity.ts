import { Favorites } from 'src/database/models/favorite-models';
import { EntitySchema } from 'typeorm';

const favoritesEntity = new EntitySchema<Favorites>({
  name: 'Favorites',
  columns: {
    artists: {
      type: 'uuid',
      array: true,
      primary: true,
    },
    albums: {
      type: 'uuid',
      array: true,
      primary: true,
    },
    tracks: {
      type: 'uuid',
      array: true,
      primary: true,
    },
  },
});

export default favoritesEntity;
