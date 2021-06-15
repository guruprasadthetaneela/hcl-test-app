import { Component, OnInit } from '@angular/core';
import { WidgetServiceService } from '../widget-service.service';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent implements OnInit {
  public ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  public tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  public teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  constructor(public widget: WidgetServiceService) { }

  ngOnInit(): void {
  }


  convertThousands(num) {
    if (num >= 1000) {
      return this.convertHundreds(Math.floor(num / 1000)) + " thousand " + this.convertHundreds(num % 1000);
    } else {
      return this.convertHundreds(num);
    }
  }

  convertHundreds(num) {
    if (num > 99) {
      return this.ones[Math.floor(num / 100)] + " hundred " + this.convertTens(num % 100);
    } else {
      return this.convertTens(num);
    }
  }

  convertTens(num) {
    if (num < 10) return this.ones[num];
    else if (num >= 10 && num < 20) return this.teens[num - 10];
    else {
      return this.tens[Math.floor(num / 10)] + " " + this.ones[num % 10];
    }
  }

  convert(num) {
    num = parseInt(num);
    if (num == 0) return "zero";
    else return this.convertThousands(num);
  }
  //end of conversion code

}
