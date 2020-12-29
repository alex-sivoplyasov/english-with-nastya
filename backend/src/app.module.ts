import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
    StudentsModule,
    MongooseModule.forRoot(`mongodb+srv://admin:Maurozarate10@cluster0.rninu.mongodb.net/application?retryWrites=true&w=majority`),
    UsersModule,
    FilesModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
