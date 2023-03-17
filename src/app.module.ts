import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanetasModule } from './canetas/canetas.module';

@Module({
  imports: [CanetasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
