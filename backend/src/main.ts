import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
// import express from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const express = require("express")
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  await app.listen(3000)
}
bootstrap();
