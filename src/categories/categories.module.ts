import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categorie } from './categorie.model';

@Module({
  imports: [SequelizeModule.forFeature([Categorie])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
