import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1697640518208 } from 'src/migrations/1697640518208-CreateCoursesTable';
import { CreateTagsTable1697718017124 } from 'src/migrations/1697718017124-CreateTagsTable';
import { CreateCoursesTagsTable1697722558710 } from 'src/migrations/1697722558710-CreateCoursesTagsTable';
import { AddCoursesIdToCouresTagsTable1697723852660 } from 'src/migrations/1697723852660-AddCoursesIdToCouresTagsTable';
import { AddTagsIdToCoursesTagsTable1697725616624 } from 'src/migrations/1697725616624-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const datasource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1697640518208,
    CreateTagsTable1697718017124,
    CreateCoursesTagsTable1697722558710,
    AddCoursesIdToCouresTagsTable1697723852660,
    AddTagsIdToCoursesTagsTable1697725616624,
  ],
});
