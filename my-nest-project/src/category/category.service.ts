import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = ['mango', 'apple', 'orange', 'banana'];

  getCategories(): string[] {
    return this.categories;
  }
}
