import { Component, OnInit } from '@angular/core';
import { Sale } from './sales';
import { SaleserviceService } from './saleservice.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(public salesService: SaleserviceService) { }

  ngOnInit(): void {
    this.sales = this.salesService.mySales;
  }

}
