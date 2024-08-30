import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Article } from '../article/article.model';

@Table
export class Marque extends Model<Marque> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  idMarque: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  libMarque: string;

  @HasMany(() => Article)
  articles: Article[];
}
