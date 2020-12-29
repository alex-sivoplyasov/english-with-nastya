import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import {CreateLessonDto} from "./dto/create-lesson.dto";
import {UpdateLessonDto} from "./dto/update-lesson.dto";
import {LessonsService} from "./lessons.service";


@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getAll() {
    return this.lessonsService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id) {
    return this.lessonsService.getById(id)
  }

  @Post()
  add(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.add(createLessonDto)
  }



  @Put(':id')
  update(@Body() updateLessonDto:UpdateLessonDto, @Param('id') id:string) {
    return this.lessonsService.update(id, updateLessonDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.lessonsService.remove(id)
  }
}
