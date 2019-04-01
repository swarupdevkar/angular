import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { MySwitchComponent } from './my-switch/my-switch.component';
import { DirectivesComponent } from './directives/directives.component';
import { BrdshDirective } from './directives/brdsh.directive';
import { CmSwtchDirective } from './directives/cm-swtch.directive';

@NgModule({
  declarations: [
    AppComponent,
    MySwitchComponent,
    DirectivesComponent,
    BrdshDirective,
    CmSwtchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
