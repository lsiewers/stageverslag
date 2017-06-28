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
import { ReportIndexComponent } from 'app/components/report-index/report-index.component';
import { ProjectComponent } from 'app/components/project/project.component';
import { ProjectsIntroComponent } from './components/projects-intro/projects-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavComponent,
    FooterComponent,
    GridComponent,
    ReportIndexComponent,
    ReportIndexComponent,
    ProjectComponent,
    ProjectsIntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
