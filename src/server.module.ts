import { HttpModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { FrontendMiddleware } from './middlewares/frontend.middleware';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
      HttpModule,
      RepositoriesModule
  ],
  exports: [],
  controllers: [  ],
  providers: [],
})
export class ServerModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(FrontendMiddleware)
            .forRoutes({
                path: '/',
                method: RequestMethod.ALL
            });
    }
}