import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AppService } from 'src/app.service';

@Injectable()
export class CronjobsService {
  constructor(private readonly appService: AppService) {}

  // forces a getInfo call every 14 minutes between 6am and midnight (local time)
  @Cron('0 */14 6-24 * * *')
  forceGetInfoCall() {
    this.appService.getInfo();
  }
}
