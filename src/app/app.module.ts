import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 12,
      innerStrokeWidth: 6,
      outerStrokeColor: "gray",
      innerStrokeColor: "grey",
      animationDuration: 1000,
      renderOnClick: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
