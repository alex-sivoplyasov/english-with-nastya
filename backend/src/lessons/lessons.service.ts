import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Lesson, LessonDocument} from "./schemas/lesson.schema";
import {Model} from "mongoose";
import {CreateLessonDto} from "./dto/create-lesson.dto";
import {UpdateLessonDto} from "./dto/update-lesson.dto";

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>) {}

  async getAll() {
    const lessons = await this.lessonModel.find().exec()
    return lessons
  }

  getById(id:string) {
    return this.lessonModel.findById(id)
  }

  async add(lesson:CreateLessonDto) {
    const newLesson = new this.lessonModel(lesson)
    return newLesson.save()
  }

  update(id, lesson:UpdateLessonDto) {
    return this.lessonModel.findByIdAndUpdate(id, lesson, {new: true})
  }

  remove(id:string) {
    return this.lessonModel.findByIdAndRemove(id)
  }
}
