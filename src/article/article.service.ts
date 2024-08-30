import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { ArticleType } from './article-type.model';
import { Type } from '../type/type.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article)
    private readonly articleModel: typeof Article,
    @InjectModel(Type)
    private readonly typeModel: typeof Type,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const { typeIds, ...articleData } = createArticleDto;
    const article = await this.articleModel.create(articleData);

    if (typeIds && typeIds.length) {
      const types = await this.typeModel.findAll({ where: { idType: typeIds } });
      await article.$set('types', types);
    }

    return article;
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.findAll({ include: [Type] });
  }

  async findOne(id: number): Promise<Article> {
    const article = await this.articleModel.findByPk(id, { include: [Type] });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    const { typeIds, ...articleData } = updateArticleDto;
    const article = await this.findOne(id);
    await article.update(articleData);

    if (typeIds && typeIds.length) {
      const types = await this.typeModel.findAll({ where: { idType: typeIds } });
      await article.$set('types', types);
    }

    return article;
  }

  async remove(id: number): Promise<void> {
    const article = await this.findOne(id);
    await article.destroy();
  }
}
