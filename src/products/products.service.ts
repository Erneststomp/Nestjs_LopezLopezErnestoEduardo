import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productsModel: Model<ProductDocument>){}

  create(createProductDto: CreateProductDto) {
    return this.productsModel.create(createProductDto);
  }

  findAll() {
    return this.productsModel.find().lean();
  }

  findOne(id: number) {
    return this.productsModel.findOne({id: id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsModel.updateOne({id: id},updateProductDto);
  }

  remove(id: number) {
    return this.productsModel.deleteOne({id: id});
  }
}
