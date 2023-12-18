import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { RandomJokesModule } from './random-jokes/random-jokes.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Use global pipes
    app.useGlobalPipes(new ValidationPipe( {
      whitelist: true,
      forbidNonWhitelisted: true,
      } 
    ))
  
    // Swagger module
    const options = new DocumentBuilder()
      .setTitle('Test')
      .setDescription('The Test API description')
      .setVersion('1.0')
      .addTag('Test')
      .addBearerAuth() // Add bearer auth
      .build();
    const document = SwaggerModule.createDocument(app, options, {
      include: [UserModule,RandomJokesModule],
    });
    SwaggerModule.setup('api-docs', app, document);
  
    // CORS
    app.enableCors( {origin: '*'} )
    
    
  await app.listen(8000);
}
bootstrap();
