import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}
  @Get()
  findAll(@Res() res) {
    return res.status(200).json({ message: 'This action returns all courses' });
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} course`;
  }
  @Post()
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `This action updates a #${id} course`;
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} course`;
  }
}
