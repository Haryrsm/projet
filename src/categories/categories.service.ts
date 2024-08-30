import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categorie } from './categorie.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categorie)
    private readonly categorieModel: typeof Categorie,
  ) {}

  async createCategorie(name: string) {
    return this.categorieModel.create({ name });
  }

  async findAll(): Promise<Categorie[]> {
    return this.categorieModel.findAll();
  }

  async updateCategorie(id: number, name: string) {
    const categorie = await this.categorieModel.findOne({ where: { id } });
    if (categorie) {
      categorie.name = name;
      return categorie.save();
    }
    return null;
  }

  async deleteCategorie(id: number): Promise<void> {
    const categorie = await this.categorieModel.findOne({ where: { id } });
    if (categorie) {
      return categorie.destroy();
    }
  }
}
