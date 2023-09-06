import { Inject, Injectable } from '@nestjs/common';
import { AILMENT_REPOSITORY } from 'src/core/constants';
import { AilmentsImageEntity } from 'src/core/database/entities/ailments-images/ailment-images.entity';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { AilmentsFilters } from './interfaces/ailments-filters';
import { Op } from 'sequelize';

@Injectable()
export class AilmentsRepositoryService {
  constructor(
    @Inject(AILMENT_REPOSITORY)
    private readonly ailmentRepository: typeof AilmentEntity,
  ) {}

  async getAll(data: AilmentsFilters): Promise<AilmentEntity[]> {
    if (data.name) {
      return this.ailmentRepository.findAll<AilmentEntity>({
        where: { name: { [Op.like]: `%${data.name}%` } },
        include: [AilmentsImageEntity],
      });
    }
    return this.ailmentRepository.findAll<AilmentEntity>({
      include: [AilmentsImageEntity],
    });
  }

  async getById(id: number): Promise<AilmentEntity> {
    return this.ailmentRepository.findOne<AilmentEntity>({
      where: { id: id },
      include: [AilmentsImageEntity],
    });
  }
}
