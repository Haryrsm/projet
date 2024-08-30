import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Marque } from './marque.model';
import { CreateMarqueDto } from '../dto/create-marque.dto';
import { UpdateMarqueDto } from '../dto/update-marque.dto';

@Injectable()
export class MarqueService {
  constructor(
    @InjectModel(Marque)
    private readonly marqueModel: typeof Marque,
  ) {}

  async create(createMarqueDto: CreateMarqueDto): Promise<Marque> {
    return this.marqueModel.create(createMarqueDto);
  }

  async findAll(): Promise<Marque[]> {
    return this.marqueModel.findAll();
  }

  async findOne(id: number): Promise<Marque> {
    const marque = await this.marqueModel.findByPk(id);
    if (!marque) {
      throw new NotFoundException('Marque not found');
    }
    return marque;
  }

  async update(id: number, updateMarqueDto: UpdateMarqueDto): Promise<Marque> {
    const marque = await this.findOne(id);
    return marque.update(updateMarqueDto);
  }

  async remove(id: number): Promise<void> {
    const marque = await this.findOne(id);
    await marque.destroy();
  }
}
