import { Test, TestingModule } from '@nestjs/testing';
import { CoustomerController } from './coustomer.controller';

describe('CoustomerController', () => {
  let controller: CoustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoustomerController],
    }).compile();

    controller = module.get<CoustomerController>(CoustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
