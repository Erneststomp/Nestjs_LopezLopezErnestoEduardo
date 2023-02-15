import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async(config:ConfigService)=>({
      uri:config.get<string>('urlmongo')
    })
}), ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
