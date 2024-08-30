import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './article.model';
import { ArticleType } from './article-type.model';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Type } from '../type/type.model';

@Module({
  imports: [SequelizeModule.forFeature([Article, ArticleType, Type])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
