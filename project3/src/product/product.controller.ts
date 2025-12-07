import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './shema/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('tag')
  createTag(@Body('tags') tags: { name: string }[]) {
    return this.productService.createTag(tags);
  }

  @Get('tags')
  getAllTags() {
    return this.productService.getAllTags();
  }

  @Post()
  createProduct(@Body() payload: Product) {
    return this.productService.createProduct(payload);
  }
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
