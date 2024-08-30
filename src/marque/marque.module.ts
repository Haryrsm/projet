import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Marque } from './marque.model';
import { MarqueService } from './marque.service';
import { MarqueController } from './marque.controller';
import { Article } from '../article/article.model';

@Module({
  imports: [SequelizeModule.forFeature([Marque, Article])],
  providers: [MarqueService],
  controllers: [MarqueController],
})
export class MarqueModule {}
