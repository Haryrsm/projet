import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(username: string, password: string, role: string) {
    return this.userModel.create({ username, password, role });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { username } });
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
