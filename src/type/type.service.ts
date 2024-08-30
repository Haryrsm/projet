import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from './type.model';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private readonly typeModel: typeof Type,
  ) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    return this.typeModel.create(createTypeDto);
  }

  async findAll(): Promise<Type[]> {
    return this.typeModel.findAll();
  }

  async findOne(id: number): Promise<Type> {
    const type = await this.typeModel.findByPk(id);
    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }
    return type;
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type> {
    const type = await this.findOne(id);
    return type.update(updateTypeDto);
  }

  async remove(id: number): Promise<void> {
    const type = await this.findOne(id);
    await type.destroy();
  }
}
