import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"

export type LessonDocument = Lesson & Document

@Schema()
export class Lesson {
  @Prop()
  studentId: string

  @Prop()
  date: string

  @Prop()
  time: string

  @Prop()
  duration: number

  @Prop()
  price: number

  @Prop()
  status: string

}

export const LessonSchema = SchemaFactory.createForClass(Lesson)
