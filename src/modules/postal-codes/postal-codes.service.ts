import { Inject, Injectable } from '@nestjs/common';
import { PostalCodesRepositoryService } from './postal-codes-repository.service';
import { PostalCodeEntity } from 'src/core/database/entities/postal-codes/postal-code.entity';

@Injectable()
export class PostalCodesService {
  @Inject(PostalCodesRepositoryService)
  private readonly pcRepository: PostalCodesRepositoryService;

  async getAll(code: number): Promise<PostalCodeEntity[]> {
    const data = await this.pcRepository.listAll(code);
    return data.map((item) => {
      const { ...rest } = item.get({ plain: true });
      return rest as PostalCodeEntity;
    });
  }
}
