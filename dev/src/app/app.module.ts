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


const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: '**', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BlogsComponent,
    BannerComponent,
    FeaturedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
