import { Component, OnInit } from '@angular/core';
import { WidgetServiceService } from '../widget-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-summary',
  templateUrl: './widget-summary.component.html',
  styleUrls: ['./widget-summary.component.scss']
})
export class WidgetSummaryComponent implements OnInit {
  widgetData;
  widgetId: string;
  closeResult: string;

  constructor(public widget: WidgetServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // localStorage.removeItem("widget")
    this.widgetData = JSON.parse(localStorage.getItem("widget"));
  }

  viewWidget(data) {
    this.widget.data = data;
    this.widget.showFlag = true;
  }

  openModel(content, id) {
    this.widgetId = id;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Widget has been removed successfully`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  removeWidget() {
    let widgetDataRef = [];
    if (localStorage.getItem("widget")) {
      widgetDataRef = JSON.parse(localStorage.getItem("widget"));
      if (widgetDataRef.length > 0) widgetDataRef = widgetDataRef.filter((widget) => widget.id !== this.widgetId);
      if (widgetDataRef.length > 0) localStorage.setItem("widget", JSON.stringify(widgetDataRef));
      else localStorage.removeItem("widget");
      this.widgetData = JSON.parse(localStorage.getItem("widget"));
      this.widget.data = {};
      this.widget.showFlag = false;
    }
  }
}
