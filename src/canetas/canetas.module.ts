import { Module } from '@nestjs/common';
import { CanetasService } from './canetas.service';
import { CanetasController } from './canetas.controller';

@Module({
  controllers: [CanetasController],
  providers: [CanetasService]
})
export class CanetasModule {}
