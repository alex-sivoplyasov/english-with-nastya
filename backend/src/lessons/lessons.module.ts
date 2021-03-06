import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Lesson, LessonSchema} from "./schemas/lesson.schema";
import {LessonsController} from "./lessons.controller";

@Module({
  imports: [MongooseModule.forFeature([{name: Lesson.name, schema: LessonSchema}])],
  controllers: [LessonsController],
  providers: [LessonsService]
})
export class LessonsModule {}
