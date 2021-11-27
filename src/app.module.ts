import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from '@nestjs/config'
import { configSchema } from 'schema';

@Module({
  imports: [UsersModule, TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory(config: ConfigService){
      return {
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        synchronize: true,
        entities: ['dist/**/entity/*.js']
      }
    }
  }), ConfigModule.forRoot({
    envFilePath: '.env',
    validationSchema: configSchema
  })]
})
export class AppModule {}
