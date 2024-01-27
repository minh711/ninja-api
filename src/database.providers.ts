import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'ninja_db',
        entities: ['dist/**/*.entity.{ts,js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];