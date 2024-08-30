import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.typeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(id, updateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.typeService.remove(id);
  }
}
