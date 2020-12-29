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
import {CreateStudentDto} from "./dto/create-student.dto";
import {UpdateStudentDto} from "./dto/update-student.dto";
import {StudentsService} from "./students.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {editFileName, imageFileFilter} from "../utils/file-upload.utils";
import { diskStorage } from 'multer';



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

  //
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file) {
  //   console.log(file)
  // }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully!',
      data: response,
    };
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
