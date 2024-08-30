import { Controller, Post, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  createCategorie(@Body() body) {
    return this.categoriesService.createCategorie(body.name);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.categoriesService.findAll();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  updateCategorie(@Param('id') id: number, @Body() body) {
    return this.categoriesService.updateCategorie(id, body.name);
  }
}
