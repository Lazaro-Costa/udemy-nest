import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1697640518208 } from 'src/migrations/1697640518208-CreateCoursesTable';
import { CreateTagsTable1697718017124 } from 'src/migrations/1697718017124-CreateTagsTable';
import { CreateCoursesTagsTable1697722558710 } from 'src/migrations/1697722558710-CreateCoursesTagsTable';
import { AddCoursesIdToCouresTagsTable1697723852660 } from 'src/migrations/1697723852660-AddCoursesIdToCouresTagsTable';
import { AddTagsIdToCoursesTagsTable1697725616624 } from 'src/migrations/1697725616624-AddTagsIdToCoursesTagsTable';

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
