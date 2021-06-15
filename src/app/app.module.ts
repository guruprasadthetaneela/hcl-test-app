import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetSummaryComponent } from './widget-summary/widget-summary.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetAddComponent } from './widget-add/widget-add.component';
import { WidgetHomeComponent } from './widget-home/widget-home.component';
import { WidgetServiceService } from './widget-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetSummaryComponent,
    WidgetDetailsComponent,
    WidgetAddComponent,
    WidgetHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WidgetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
