import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SaveUserDataService } from './services/save-user-data.service';
import { UpdateUserEnvironmentService } from './services/update-user-environment.service';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BlogsComponent,
    BannerComponent,
    FeaturedComponent,
    NavbarComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SaveUserDataService, UpdateUserEnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
