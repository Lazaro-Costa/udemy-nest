import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      nome: 'Angular',
      description: 'Descrição do Angular',
      tags: ['Angular', 'TypeScript'],
    },
    {
      id: 2,
      nome: 'React',
      description: 'Descrição do React',
      tags: ['React', 'JavaScript'],
    },
    {
      id: 3,
      nome: 'Vue',
      description: 'Descrição do Vue',
      tags: ['Vue', 'JavaScript'],
    },
  ];
  findAll() {
    return this.courses;
  }
  findOne(id: number) {
    const course = this.courses.find((course) => course.id === id);
    if (!course) {
      throw new NotFoundException(`Course with id: ${id} not found`);
    }
    return course;
  }
  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }
  update(id: number, updateCourseDTO: any) {
    const existCourse = this.findOne(id);

    if (existCourse as any) {
      this.courses = this.courses.map((course) => {
        if (course.id === id) {
          return { ...course, ...updateCourseDTO };
        }
        return course;
      });
      // Alternative solution
      // const index = this.courses.findIndex((course) => course.id === id);
      // this.courses[index] = { id, ...updateCourseDTO };
    }
  }
  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
