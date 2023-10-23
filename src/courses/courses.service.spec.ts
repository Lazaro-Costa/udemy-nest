import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectedOutputTags: any;
  let expectedOutputCourses: any;
  let mockCourseRepository: any;
  let mockTagRepository: any;
  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();
    expectedOutputTags = [
      {
        id,
        name: 'TypeScript',
        created_at,
      },
    ];
    expectedOutputCourses = {
      id,
      name: 'Test',
      description: 'Teste description',
      created_at,
      tags: expectedOutputTags,
    };
    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      preload: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      findAll: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      findOne: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
    };
    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findOne: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    //@ts-expect-error defined part of the methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of the methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDTO: CreateCourseDTO = {
      name: 'Test',
      description: 'Teste description',
      tags: ['TypeScript'],
    };
    const newCourse = await service.create(createCourseDTO);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(newCourse);
  });

  it('should list all courses', async () => {
    //@ts-expect-error defined part of the methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of the methods
    service['tagRepository'] = mockTagRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(courses);
  });

  it('should gets a course by id', async () => {
    //@ts-expect-error defined part of the methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of the methods
    service['tagRepository'] = mockTagRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(course);
  });

  it('should update a course', async () => {
    //@ts-expect-error defined part of the methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of the methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'Test',
      description: 'Teste description',
      tags: ['TypeScript'],
    };
    const course = await service.update(id, updateCourseDTO);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(mockCourseRepository.preload).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(course);
  });

  it('should delete a course', async () => {
    //@ts-expect-error defined part of the methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of the methods
    service['tagRepository'] = mockTagRepository;

    const course = await service.remove(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(course);
  });
});
