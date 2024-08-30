import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from './type.model';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';

@Module({
  imports: [SequelizeModule.forFeature([Type])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
