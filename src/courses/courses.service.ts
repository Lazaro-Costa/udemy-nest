import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      nome: 'Angular',
      description: 'Descrição do Angular',
      tags: ['Angular', 'TypeScript'],
    },
    {
      id: '2',
      nome: 'React',
      description: 'Descrição do React',
      tags: ['React', 'JavaScript'],
    },
    {
      id: '3',
      nome: 'Vue',
      description: 'Descrição do Vue',
      tags: ['Vue', 'JavaScript'],
    },
  ];
}
