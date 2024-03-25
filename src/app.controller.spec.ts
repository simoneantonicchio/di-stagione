import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getInfo', () => {
    it('should contain a "jsonVersion" property', () => {
      const appController = app.get(AppController);
      expect(appController.getInfo()).toHaveProperty('jsonVersion');
    });
  });
});
