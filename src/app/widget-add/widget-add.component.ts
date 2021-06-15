import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetServiceService } from '../widget-service.service';
export class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

@Component({
  selector: 'app-widget-add',
  templateUrl: './widget-add.component.html',
  styleUrls: ['./widget-add.component.scss']
})
export class WidgetAddComponent implements OnInit {
  widgetForm = this.formBuilder.group({
    id: Guid.newGuid(),
    name: '',
    value: ''
  });
  widgetId: string;
  constructor(private formBuilder: FormBuilder, public router: Router, public activeRoute: ActivatedRoute, public widget: WidgetServiceService) {
  }

  ngOnInit(): void {
    this.widgetId = this.activeRoute.snapshot.queryParamMap.get("id");
    if (this.widgetId) {
      let widgetDataRef: any = [];
      if (localStorage.getItem("widget")) {
        widgetDataRef = JSON.parse(localStorage.getItem("widget"));
        if (widgetDataRef.length > 0) widgetDataRef = widgetDataRef.filter((widget) => widget.id === this.widgetId);
        this.widgetForm.controls['id'].patchValue(widgetDataRef[0].id);
        this.widgetForm.controls['name'].patchValue(widgetDataRef[0].name);
        this.widgetForm.controls['value'].patchValue(parseInt(widgetDataRef[0].value));
      }
    }
  }
  onSubmit() {
    // Process checkout data here
    if (localStorage.getItem("widget") && JSON.parse(localStorage.getItem("widget")).length > 0 && JSON.parse(localStorage.getItem("widget")).filter((widget) => widget.name === this.widgetForm.value.name && widget.id !== this.widgetId).length > 0) {
      alert("Widget name should be unique");
      return;
    }
    let widgetData: any = [];
    if (this.widgetId) {
      if (JSON.parse(localStorage.getItem("widget")).length > 0) widgetData = JSON.parse(localStorage.getItem("widget")).filter((widget) => widget.id !== this.widgetId);
      widgetData.push(this.widgetForm.value);
      this.widget.data = this.widgetForm.value;
    } else if (localStorage.getItem("widget")) {
      widgetData = JSON.parse(localStorage.getItem("widget"));
      if (widgetData.length > 0) widgetData.push(this.widgetForm.value);
    } else {
      widgetData.push(this.widgetForm.value);
    }
    localStorage.removeItem("widget");
    localStorage.setItem("widget", JSON.stringify(widgetData));
    this.widgetForm.reset();
    this.router.navigate([""]);
  }
}
