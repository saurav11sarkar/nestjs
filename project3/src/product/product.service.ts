import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './shema/product.schema';
import { Model } from 'mongoose';
import { Tag } from './shema/tag.shema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Tag.name) private readonly tagModel: Model<Tag>,
  ) {}

  async createTag(payload: Partial<Tag>[]) {
    const result = await this.tagModel.insertMany(payload);
    return result;
  }

  async getAllTags() {
    const result = await this.tagModel.find();
    if (!result) return null;
    return result;
  }

  async createProduct(payload: Partial<Product>) {
    const result = await this.productModel.create(payload);
    if (!result) return null;
    return result;
  }

  async getAllProducts() {
    const result = await this.productModel.find().populate('tag').exec();
    if (!result) return null;
    return result;
  }
}
