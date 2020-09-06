import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {EffectsModule} from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TopBarModule} from './shared/modules/top-bar/topBar.module';
import {AuthInterceptor} from './shared/services/authInterceptor.service';
import {PersistanceService} from './shared/services/persistance.service';
import {GlobalFeedModule} from './globalFeed/globalFeed.module';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {YourFeedModule} from './yourFeed/yourFeed.module';
import {TagFeedModule} from './tagFeed/tagFeed.module';
import {ArticleModule} from './article/article.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    TopBarModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
