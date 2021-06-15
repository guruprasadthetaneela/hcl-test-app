import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetAddComponent } from './widget-add/widget-add.component';
import { WidgetHomeComponent } from './widget-home/widget-home.component';

const routes: Routes = [{
  path: "",
  component: WidgetHomeComponent
},
{
  path: "edit",
  component: WidgetAddComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
