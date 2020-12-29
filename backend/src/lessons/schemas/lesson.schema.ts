import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"

export type LessonDocument = Lesson & Document

@Schema()
export class Lesson {
  @Prop()
  name: string

  @Prop()
  parentName: string

  @Prop()
  age: number

  @Prop()
  rate: number

  @Prop()
  active: boolean

  @Prop()
  class: number

  @Prop()
  image: string
}

export const LessonSchema = SchemaFactory.createForClass(Lesson)
