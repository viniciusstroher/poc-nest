import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIGURATION_MODULE } from './consts';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env'})],
  providers: [{
    //criar objeto para passar pelo sistema
    provide: CONFIGURATION_MODULE,
        useFactory: () => {
          // selectedDatabase: process.env.
        }
  }]
})
export class ConfigurationModule {}