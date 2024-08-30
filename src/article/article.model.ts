import { Table, Column, Model, DataType, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Type } from '../type/type.model';
import { ArticleType } from './article-type.model';
import { Marque } from '../marque/marque.model';

@Table
export class Article extends Model<Article> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  idArticle: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  libArticle: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  prix: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantite: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  taille: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  couleur: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  valide: boolean;

  @BelongsToMany(() => Type, () => ArticleType)
  types: Type[];

  @BelongsTo(() => Marque)
  marque: Marque;
}
