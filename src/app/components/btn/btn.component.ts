import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn:'primary'|'success'|'danger'|'light'='primary';

  mapColors = {
    success: {
      'bg-success-700 hover:bg-success-800 focus:ring-success-300': true,
      'text-white': true
    },
    primary: {
      'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300': true,
      'text-white': true
    },
    red: {
      'bg-danger-700 hover:bg-danger-800 focus:ring-danger-300': true,
      'text-white': true
    },
    "gray-light": {
      'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50': true,
      'text-gray-700': true
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  get colors() {
    const colors=this.mapColors[this.colorBtn];
    if(colors){
      return colors;
    }else{
      return {}
    }
  }

}
