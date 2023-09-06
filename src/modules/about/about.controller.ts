import { Controller, Get, Inject } from '@nestjs/common';
import { AboutService } from './about.service';
import { SuccessResponse } from 'src/core/clases/success.response';

@Controller('api/v1/about')
export class AboutController {
  @Inject(AboutService)
  private readonly aboutService: AboutService;

  @Get('about-us')
  async getMainProduct(): Promise<SuccessResponse> {
    const data = await this.aboutService.getAboutUs();
    return new SuccessResponse(data);
  }
}
