import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Article } from '../article/article.model';

@Table
export class Vente extends Model<Vente> {
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  idVente: number;

  @ForeignKey(() => Article)
  @Column
  idArticle: number;

  @BelongsTo(() => Article)
  article: Article;

  @Column
  dateVente: Date;
}
