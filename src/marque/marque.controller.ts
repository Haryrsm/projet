import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { CreateMarqueDto } from '../dto/create-marque.dto';
import { UpdateMarqueDto } from '../dto/update-marque.dto';

@Controller('marques')
export class MarqueController {
  constructor(private readonly marqueService: MarqueService) {}

  @Post()
  create(@Body() createMarqueDto: CreateMarqueDto) {
    return this.marqueService.create(createMarqueDto);
  }

  @Get()
  findAll() {
    return this.marqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarqueDto: UpdateMarqueDto) {
    return this.marqueService.update(+id, updateMarqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marqueService.remove(+id);
  }
}
