import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"

export type StudentDocument = Student & Document

@Schema()
export class Student {
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

export const StudentSchema = SchemaFactory.createForClass(Student)
