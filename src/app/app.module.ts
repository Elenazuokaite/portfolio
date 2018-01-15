import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CanvasComponent } from './canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    RouterModule,
    NgCircleProgressModule.forRoot({
      'radius': 60,
      'space': -10,
      'outerStrokeWidth': 10,
      'outerStrokeColor': '#808080',
      'innerStrokeColor': '#ffffff00',
      'innerStrokeWidth': 10,
      'showSubtitle': false,
      'subtitleFontSize': '32',
      'animationDuration': 1000,
      'showTitle': true,
      'showUnits': true,
      'showBackground': false,
      // 'subtitleFormat': this.formatSubtitle()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  formatSubtitle = (percent: number): string => {
    if (percent >= 100) {
      return 'Congratulations!';
    } else if (percent >= 50) {
      return 'Half';
    } else if (percent > 0) {
      return 'Just began';
    } else {
      return 'Not started';
    }
  }
 }
