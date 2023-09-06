import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  async getAboutUs(): Promise<string> {
    return 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. ';
  }
}
