import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { Categorie } from './categories/categorie.model';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeController } from './type/type.controller';
import { TypeModule } from './type/type.module';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';
import { MarqueController } from './marque/marque.controller';
import { MarqueModule } from './marque/marque.module';
import { VenteService } from './vente/vente.service';
import { VenteModule } from './vente/vente.module';
import { VenteService } from './vente/vente.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [User, Categorie],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    CategoriesModule,
    TypeModule,
    ArticleModule,
    MarqueModule,
    VenteModule,
  ],
  controllers: [TypeController, ArticleController, MarqueController],
  providers: [VenteService],
})
export class AppModule {}
