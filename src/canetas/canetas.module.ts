import { Module } from '@nestjs/common';
import { CanetasService } from './canetas.service';
import { CanetasController } from './canetas.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Caneta } from './entities/caneta.entity';
import { Fabricante } from './entities/fabricante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Caneta, Fabricante])],
  controllers: [CanetasController],
  providers: [CanetasService]
})
export class CanetasModule {}
