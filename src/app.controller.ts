import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('info')
  getInfo(): any {
    return this.appService.getInfo();
  }

  @Get('data')
  getData(): any {
    return this.appService.getData();
  }
}
