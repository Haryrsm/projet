import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenteController } from './vente.controller';
import { VenteService } from './vente.service';
import { Vente } from './vente.model';
import { Article } from '../article/article.model';

@Module({
  imports: [SequelizeModule.forFeature([Vente, Article])],
  controllers: [VenteController],
  providers: [VenteService],
})
export class VenteModule {}
