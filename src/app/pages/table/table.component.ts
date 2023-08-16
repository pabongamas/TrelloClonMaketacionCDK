import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model';
import { DataSourceProduct } from './data-source';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }
  // products:Product[]=[];
  dataSource = new DataSourceProduct();
  total = 0;
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  input = new FormControl('', { nonNullable: true })
  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        // esto es para cuando sea directo , en un array de products como esta arriba comentado
        // this.products=data;
        // this.total=this.products
        //   .map(item=>item.price)
        //   .reduce((price,total)=>price+total,0);
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      })
    this.input.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.dataSource.find(value);
      });
  }
  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
