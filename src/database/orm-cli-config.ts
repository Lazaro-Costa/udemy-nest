import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1697640518208 } from 'src/migrations/1697640518208-CreateCoursesTable';

export const datasource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1697640518208],
});
