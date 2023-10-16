import { IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly nome: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly tags: string[];
}
