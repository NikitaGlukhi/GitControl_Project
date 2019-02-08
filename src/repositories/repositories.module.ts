import { HttpModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GitHubRepositoriesService } from './repositories.service';
import { GitHubRepositoriesRepository } from './repositories.repository';
import { repositoriesProviders } from './repositories.providers';
import { databaseProviders } from '../common/database.providers';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { RepositoriesController } from './repositories.controller';
import { ConfigService } from '../../config/config.service';

@Module({
    controllers: [
      RepositoriesController
    ],
    imports: [ HttpModule ],
    providers: [
        ConfigService,
        GitHubRepositoriesService,
        GitHubRepositoriesRepository,
        ...repositoriesProviders,
        ...databaseProviders
    ]
})
export class RepositoriesModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(LoggerMiddleware)
    //         .with('RepositoriesModule', 'GET')
    //         .exclude(
    //             { path: 'repository', method: RequestMethod.ALL }
    //         )
    //         .forRoutes('/');
    // }
}
