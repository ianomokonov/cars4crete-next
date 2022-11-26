import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppService } from './app.service';
import Next from 'next';
import { getDataSource } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './modules/place/place.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    PlaceModule,
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return AppModule.getDatabaseConfig();
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public static getDatabaseConfig(): unknown {
    return {
      ...getDataSource().options,
      autoLoadEntities: true,
    };
  }
}
