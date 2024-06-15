import { Module } from '@nestjs/common';
import { CronjobsService } from './cronjobs.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CronjobsService]
})
export class CronjobsModule {}
