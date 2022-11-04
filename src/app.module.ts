import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';


import { PostagemModule } from './postagem/postagem.modulo';

import { TemaModule } from './tema/tema.module';
import { UsuarioModule } from './usuario/usuario.module';



@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //    type: 'mysql',
    //    host: 'localhost',
    //    port: 3306,
    //    username:'root',
    //    password: 'root',
    //    database: 'db_blogPekky',
    //    entities: [Postagem,Tema,Usuario],
    //   synchronize: true
    // }),  
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      synchronize: true,
      autoLoadEntities: true,
    }),  
    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}