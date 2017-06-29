import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/components/app.component';
import { IntroComponent } from 'app/components/intro/intro.component';
import { NavComponent } from 'app/components/nav/nav.component';
import { FooterComponent } from 'app/components/footer/footer.component';
import { GridComponent } from 'app/components/grid/grid.component';
import { ProjectComponent } from 'app/components/project/project.component';
import { ProjectsIntroComponent } from './components/projects-intro/projects-intro.component';
import { IntroEndComponent } from './components/intro-end/intro-end.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';


const routes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: 'inleiding', component: IntroEndComponent, data: {type: 'inleiding'} },
  { path: 'conclusie', component: IntroEndComponent, data: {type: 'conclusie'} },
  { path: 'gallerij', component: PhotoGalleryComponent },
  {
    path: 'concepten',
    component: ProjectsIntroComponent,
    children: [{
      path: ':link',
      component: ProjectComponent
    }]
  },
  {
    path: 'realisaties',
    component: ProjectsIntroComponent,
    children: [{
      path: ':link',
      component: ProjectComponent
    }]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
