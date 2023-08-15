import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() typeBtn:'button'|'reset'|'submit'='button';
  @Input() colorBtn:string='primary';

  constructor() { }

  ngOnInit(): void {
  }
  get colors() {
    return {
      'text-white':this.colorBtn==='success'||this.colorBtn==='primary'||this.colorBtn==='red',
      'text-gray-700':this.colorBtn==='gray-light',
      'bg-success-700 hover:bg-success-800 focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300': this.colorBtn === 'primary',
      'bg-red-700 hover:bg-red-800 focus:ring-red-300': this.colorBtn === 'red',
      'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50': this.colorBtn === 'gray-light',
    }
  }

}
