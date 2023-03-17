import { Test, TestingModule } from '@nestjs/testing';
import { CanetasController } from './canetas.controller';
import { CanetasService } from './canetas.service';

describe('CanetasController', () => {
  let controller: CanetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanetasController],
      providers: [CanetasService],
    }).compile();

    controller = module.get<CanetasController>(CanetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
