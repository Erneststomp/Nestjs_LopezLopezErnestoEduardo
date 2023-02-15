import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, {HydratedDocument} from "mongoose";

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    id: number
    @Prop()
    timestamp: number
    @Prop()
    name: String
    @Prop()
    description: String
    @Prop()
    code: String
    @Prop()
    thumbnail: String
    @Prop()
    price: number
    @Prop()
    stock:number
    @Prop()
    type: String
    
}

export const ProductSchema = SchemaFactory.createForClass(Product)