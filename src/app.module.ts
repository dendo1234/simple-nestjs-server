import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanetasModule } from './canetas/canetas.module';
import { Caneta } from './canetas/entities/caneta.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Caneta],
      synchronize: true,
      //autoLoadEntities: true,
    }), 
    CanetasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
