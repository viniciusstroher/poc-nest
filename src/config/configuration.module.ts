import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: './env'})
  ],
  providers: [ConfigModule, ConfigService],
  exports: [ConfigService]
})
export class ConfigurationModule {}