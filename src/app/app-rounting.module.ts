import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { JqeComponent } from './jqe/jqe.component';
import { Lesson7Component } from './lesson7/lesson7.component';

const routes: Routes = [
{path:'',redirectTo:'lesson1',pathMatch:'full'},
{path:'lesson1',component:Lesson1Component},
{path:'lesson2',component:Lesson2Component},
{path:'lesson3',component:Lesson3Component},
{path:'lesson4',component:Lesson4Component},
{path:'lesson5',component:Lesson5Component},
{path:'lesson6',component:Lesson6Component},
{path:'dyclass', component:DyclassComponent},
{path:'dyclass/:number/:number2', component:DyclassComponent},
{path:'jqe', component:JqeComponent},
{path:'lesson7',component:Lesson7Component},
{path:'**', component:Lesson3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
