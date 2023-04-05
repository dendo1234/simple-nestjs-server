import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanetasModule } from './canetas/canetas.module';
import { Caneta } from './canetas/entities/caneta.entity';
import { Fabricante } from './canetas/entities/fabricante.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Caneta, Fabricante],
      migrations: [],
      synchronize: true,
      //autoLoadEntities: true,
    }), 
    CanetasModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
