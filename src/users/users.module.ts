import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/Users';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MulterModule.register({
    fileFilter(req, file, cb){
      cb(undefined, true)
    }
  }), TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
