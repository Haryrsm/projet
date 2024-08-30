import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Type } from '../type/type.model';

@Table
export class Categorie extends Model {
  @Column
  name: string;


  @HasMany(() => Type)
  types: Type[];
}
