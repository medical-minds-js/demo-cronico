import { Inject, Injectable } from '@nestjs/common';
import { POSTAL_CODES_REPOSITORY } from 'src/core/constants';
import { PostalCodeEntity } from 'src/core/database/entities/postal-codes/postal-code.entity';

@Injectable()
export class PostalCodesRepositoryService {
  constructor(
    @Inject(POSTAL_CODES_REPOSITORY)
    private readonly postalCodeRepository: typeof PostalCodeEntity,
  ) {}

  async listAll(code: number): Promise<PostalCodeEntity[]> {
    return await this.postalCodeRepository.findAll<PostalCodeEntity>({
      where: { isActive: 1, postalCode: code },
    });
  }
}
