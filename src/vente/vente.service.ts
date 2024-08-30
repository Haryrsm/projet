import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vente } from './vente.model';
import { CreateVenteDto } from '../dto/create-vente.dto';
import { UpdateVenteDto } from '../dto/update-vente.dto';

@Injectable()
export class VenteService {
  constructor(
    @InjectModel(Vente)
    private readonly venteModel: typeof Vente,
  ) {}

  async create(createVenteDto: CreateVenteDto): Promise<Vente> {
    return this.venteModel.create(createVenteDto);
  }

  async findAll(): Promise<Vente[]> {
    return this.venteModel.findAll({ include: ['article'] });
  }

  async findOne(id: number): Promise<Vente> {
    const vente = await this.venteModel.findByPk(id, { include: ['article'] });
    if (!vente) {
      throw new NotFoundException('Vente not found');
    }
    return vente;
  }

  async update(id: number, updateVenteDto: UpdateVenteDto): Promise<Vente> {
    const vente = await this.findOne(id);
    return vente.update(updateVenteDto);
  }

  async remove(id: number): Promise<void> {
    const vente = await this.findOne(id);
    await vente.destroy();
  }
}
