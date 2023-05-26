import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ConfigModule } from './config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
