import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {CreateStudentDto} from "./dto/create-student.dto";
import {UpdateStudentDto} from "./dto/update-student.dto";
import {StudentsService} from "./students.service";



@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAll() {
    return this.studentsService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id) {
    return this.studentsService.getById(id)
  }

  @Post()
  add(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.add(createStudentDto)
  }

  @Put(':id')
  update(@Body() updateStudentDto:UpdateStudentDto, @Param('id') id:string) {
    return this.studentsService.update(id, updateStudentDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.studentsService.remove(id)
  }
}
