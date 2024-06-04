import { Module } from '@nestjs/common';
import { PrimaService } from './prima.service';
import { PrimaController } from './prima.controller';

@Module({
  controllers: [PrimaController],
  providers: [PrimaService]
})
export class PrimaModule {}
