import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { PrismaModule } from './prisma/prisma.module';
import { SearchModule } from './search/search.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

console.log('-----------')
console.log('this is dirname')
console.log(__dirname)
console.log('-----------')

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'starter'),
    exclude: ['/api*']
  }), AuthModule, SearchModule, HomeModule, PrismaModule],
})
export class AppModule {}
