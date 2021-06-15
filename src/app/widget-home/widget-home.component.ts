import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetServiceService } from '../widget-service.service';

@Component({
  selector: 'app-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.scss']
})
export class WidgetHomeComponent implements OnInit {

  constructor(public router: Router, public widget: WidgetServiceService) { }

  ngOnInit(): void {
  }

  addWidget(_id) {
    if (_id) {
      this.router.navigate(["edit"], { queryParams: { id: _id } });
    } else {
      this.router.navigate(["edit"]);
    }
  }
}
