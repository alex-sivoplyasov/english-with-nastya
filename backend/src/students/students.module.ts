import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Student, StudentSchema} from "./schemas/student.schema";
import {StudentsController} from "./students.controller";

@Module({
  imports: [MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
