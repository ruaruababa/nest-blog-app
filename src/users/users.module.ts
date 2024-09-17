import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';

import { FilesModule } from '../files/files.module';
import { DocumentUserPersistenceModule } from './infrastructure/persistence/document/document-persistence.module';
import { UsersService } from './users.service';

const infrastructurePersistenceModule = DocumentUserPersistenceModule;

@Module({
  imports: [infrastructurePersistenceModule, FilesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, infrastructurePersistenceModule],
})
export class UsersModule {}
