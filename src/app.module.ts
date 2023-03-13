import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user';
import { userModel } from './user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Prabhat@2023',
    database: 'test',
    entities: [UserEntity],
    synchronize: true,
  }), userModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
