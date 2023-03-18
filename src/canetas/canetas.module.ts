import { Module } from '@nestjs/common';
import { CanetasService } from './canetas.service';
import { CanetasController } from './canetas.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Caneta } from './entities/caneta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Caneta])],
  controllers: [CanetasController],
  providers: [CanetasService]
})
export class CanetasModule {}
