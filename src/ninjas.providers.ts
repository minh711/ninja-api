import { DataSource } from 'typeorm';
import { ninjas } from './ninjas/ninjas.entity';

export const ninjasProviders = [
  {
    provide: 'NINJAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ninjas),
    inject: ['DATA_SOURCE'],
  },
];