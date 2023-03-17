import { Test, TestingModule } from '@nestjs/testing';
import { CanetasService } from './canetas.service';

describe('CanetasService', () => {
  let service: CanetasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanetasService],
    }).compile();

    service = module.get<CanetasService>(CanetasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
