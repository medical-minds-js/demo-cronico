import { Inject, Injectable } from '@nestjs/common';
import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';
import { HomeRepositoryService } from './home-reposiory.service';

@Injectable()
export class HomeService {
  @Inject(HomeRepositoryService)
  private readonly homeRepository: HomeRepositoryService;

  async getHomeVideo(): Promise<any> {
    return {
      name: 'video',
      description:
        'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.',
      path: '/downloads/videos/WMS_Warehouse-Management-System.mp4',
    };
  }

  async getAboutUs(): Promise<any> {
    return {
      name: 'Quienes somos',
      description:
        'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.',
    };
  }

  async getBenefits(): Promise<any[]> {
    return [
      {
        name: 'Portitor ullamcorper',
        description:
          'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
        icon: 'icon fa-gem',
      },
      {
        name: 'Sapien veroeros',
        description:
          'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
        icon: 'icon solid fa-paper-plane',
      },
      {
        name: 'Quam lorem ipsum',
        description:
          'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
        icon: 'icon solid fa-rocket',
      },
      {
        name: 'Sed magna finibus',
        description:
          'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
        icon: 'icon solid fa-signal',
      },
    ];
  }

  async getSocialCause(): Promise<any> {
    return {
      name: 'Causa social',
      description:
        'Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.',
    };
  }

  async getTestimonials(): Promise<any[]> {
    return [
      {
        name: 'Jorge',
        description:
          'Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.',
      },
    ];
  }

  createRequestSupply(data: SupplyRequestEntity): Promise<SupplyRequestEntity> {
    return this.homeRepository.createRequestSupply(data);
  }
}
