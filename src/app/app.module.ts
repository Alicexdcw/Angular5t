import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import {NgPipesModule} from 'ngx-pipes';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5TComponent } from './lesson5-t/lesson5-t.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { HightlightDirective } from './hightlight.directive';
import { Lesson61Component } from './lesson6-1/lesson6-1.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';
import { Homework2BtnComponent } from './homework2-btn/homework2-btn.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { JqeComponent } from './jqe/jqe.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { BmiService } from './bmi.service';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Pratice1Component,
    Lesson4Component,
    Lesson5TComponent,
    Lesson5Component,
    InputButtonComponent,
    Lesson6Component,
    HightlightDirective,
    Lesson61Component,
    Homework1Component,
    Homework2Component,
    Homework2BtnComponent,
    DyclassComponent,
    JqeComponent,
    Lesson7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,  //別人寫的

    AppRoutingModule

  ],
  providers: [
    BmiService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
