import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [{ path: '', component: SplashPageComponent }];

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    NavbarComponent,
    HomeComponent,
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
