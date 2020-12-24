import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Student, StudentDocument} from "./schemas/student.schema";
import {Model} from "mongoose";
import {CreateStudentDto} from "./dto/create-student.dto";
import {UpdateStudentDto} from "./dto/update-student.dto";

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async getAll() {
    // const students = await this.studentModel.find()
    const students = await this.studentModel.find().exec()
    return students
  }

  getById(id:string) {
    return this.studentModel.findById(id)
  }

  async add(student:CreateStudentDto) {
    const newStudent = new this.studentModel(student)
    return newStudent.save()
  }

  update(id, student:UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, student, {new: true})
  }

  remove(id:string) {
    return this.studentModel.findByIdAndRemove(id)
  }
}
