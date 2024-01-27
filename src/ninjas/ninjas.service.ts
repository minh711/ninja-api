import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ninjas } from 'src/ninjas/ninjas.entity';

@Injectable()
export class NinjasService {
  constructor(
    @Inject('NINJAS_REPOSITORY')
    private ninjasRepository: Repository<ninjas>,
  ) {}

  async findAll(): Promise<ninjas[]> {
    return this.ninjasRepository.find();
  }
}
