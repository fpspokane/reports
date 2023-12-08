import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { EsProvidersComponent } from './components/es-providers/es-providers.component';
import { FpsPreventionComponent } from './components/fps-prevention/fps-prevention.component';
import { ProvidersDemoComponent } from './components/providers-demo/providers-demo.component';

const appRoutes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'es-providers', component: EsProvidersComponent },
  {
    path: 'fps-prevention',
    component: FpsPreventionComponent,
  },
  { path: 'providers-demo', component: ProvidersDemoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    NavbarComponent,
    ProvidersComponent,
    ProvidersDemoComponent,
    EsProvidersComponent,
    FpsPreventionComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
