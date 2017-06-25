import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/components/app.component';
import { IntroComponent } from 'app/components/intro/intro.component';
import { NavComponent } from 'app/components/nav/nav.component';
import { FooterComponent } from 'app/components/footer/footer.component';
import { GridComponent } from 'app/components/grid/grid.component';
import { ReportIndexComponent } from 'app/components/report-index/report-index.component';
import { ProjectComponent } from 'app/components/project/project.component';
import { ProjectsIntroComponent } from './components/projects-intro/projects-intro.component';


const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'indleiding', component: ReportIndexComponent },
  { path: 'project-intro', component: ReportIndexComponent },
  {
    path: 'concepten',
    component: ProjectsIntroComponent,
    children: [{
      path: ':id',
      component: ProjectComponent
    }]
  },
  {
    path: 'realisaties',
    component: ProjectsIntroComponent,
    children: [{
      path: ':id',
      component: ProjectComponent
    }]
  },
  { path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  { path: '**', component: ReportIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
