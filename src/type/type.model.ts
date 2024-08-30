import { Column, DataType, ForeignKey, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { Categorie } from '../categories/categorie.model';
import { Article } from '../article/article.model';
import { ArticleType } from '../article/article-type.model';

@Table
export class Type extends Model<Type> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  idType: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  libType: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  valid: boolean;

  @ForeignKey(() => Categorie)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categorieId: number;

  @BelongsToMany(() => Article, () => ArticleType)
  articles: Article[];
}
