import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from 'app/components/app.component';
import { IntroComponent } from 'app/components/intro/intro.component';
import { NavComponent } from 'app/components/nav/nav.component';
import { FooterComponent } from 'app/components/footer/footer.component';
import { GridComponent } from 'app/components/grid/grid.component';
import { ProjectComponent } from 'app/components/project/project.component';
import { ProjectsIntroComponent } from './components/projects-intro/projects-intro.component';
import { IntroEndComponent } from './components/intro-end/intro-end.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavComponent,
    FooterComponent,
    GridComponent,
    ProjectComponent,
    ProjectsIntroComponent,
    IntroEndComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
