import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categorieService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categorieService.getCategories();
  }
}
