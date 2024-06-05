import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GLOBAL_CONFIG } from './configs/configuration.config';
import { SharedModule } from './shared/shared.module';
import { RepositoryModule } from './typeorm/repositories/repository.module';
import { DbContextModule } from './typeorm/db-context.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
      load: [GLOBAL_CONFIG],
    }),
    SharedModule.forRoot({ isGlobal: true }),
    RepositoryModule.forRoot({ isGlobal: true }),
    DbContextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
