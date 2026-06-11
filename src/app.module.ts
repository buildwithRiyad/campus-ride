import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { RideModule } from './ride/ride.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'campus_ride',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
