import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Article } from './article.model';
import { Type } from '../type/type.model';

@Table
export class ArticleType extends Model<ArticleType> {
  @ForeignKey(() => Article)
  @Column
  articleId: number;

  @ForeignKey(() => Type)
  @Column
  typeId: number;
}
