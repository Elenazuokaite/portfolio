import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const APP_Routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'work', component: WorkComponent },
    { path: 'contact', component: ContactComponent },
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);
