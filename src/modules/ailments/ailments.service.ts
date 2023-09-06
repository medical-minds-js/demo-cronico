import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AilmentsRepositoryService } from './ailments-repository.service';
import { AilmentEntity } from 'src/core/database/entities/ailments/ailment.entity';
import { AilmentsFilters } from './interfaces/ailments-filters';

@Injectable()
export class AilmentsService {
  @Inject(AilmentsRepositoryService)
  private readonly ailmentRepository: AilmentsRepositoryService;

  async viewAll(filters: AilmentsFilters): Promise<AilmentEntity[]> {
    const data = await this.ailmentRepository.getAll(filters);
    return data.map((i) => i.get({ plain: true }));
  }

  async viewById(id: number): Promise<AilmentEntity> {
    const data = await this.ailmentRepository.getById(id);
    if (!data) {
      throw new NotFoundException('Padecimiento no encontrado');
    }
    return data.get({ plain: true });
  }
}
