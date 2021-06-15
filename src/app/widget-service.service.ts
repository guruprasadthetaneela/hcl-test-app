import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {
  data: any = {
    id: '',
    name: '',
    value: ''
  };
  showFlag = false;
  constructor() { }
}
