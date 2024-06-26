import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CronjobsService {
  constructor(private readonly httpService: HttpService) {}
  private readonly logger = new Logger(CronjobsService.name);

  // forces a getInfo call every 10 minutes
  @Cron('0 */10 * * * *', {
    timeZone: 'Europe/Rome',
  })    
  async forceGetInfoCall(): Promise<any> {
    const { data } = await firstValueFrom<any>(
      this.httpService.get<any>('https://distagione.onrender.com/info').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    this.logger.debug(`/info api json response: ${JSON.stringify(data)}`);
  }
}
