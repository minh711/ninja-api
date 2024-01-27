import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';
import { DatabaseModule } from 'src/database.module';
import { ninjasProviders } from 'src/ninjas.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ninjasProviders,
    NinjasService,
  ],
  controllers: [NinjasController]
})
export class NinjasModule {}
