import { Test, TestingModule } from '@nestjs/testing';
import { CoustomerService } from './coustomer.service';

describe('CoustomerService', () => {
  let service: CoustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoustomerService],
    }).compile();

    service = module.get<CoustomerService>(CoustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
