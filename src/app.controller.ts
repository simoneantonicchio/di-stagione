import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get('info')
  getInfo(): any {
    this.logger.debug('/info route');
    return this.appService.getInfo();
  }

  @Get('data')
  getData(): any {
    return this.appService.getData();
  }
}
