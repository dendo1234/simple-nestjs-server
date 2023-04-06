import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanetasModule } from './canetas/canetas.module';
import { Caneta } from './canetas/entities/caneta.entity';
import { Fabricante } from './canetas/entities/fabricante.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Caneta, Fabricante, User],
      migrations: [],
      synchronize: true,
      //autoLoadEntities: true,
    }), 
    CanetasModule, AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
