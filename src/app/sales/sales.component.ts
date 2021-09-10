import { Component, OnInit } from '@angular/core';
import { Sale } from './sales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  s1: Sale = {
    id: 1,
    name: "Condoms",
    buyingPrice: 56,
    sellingPrice: 76
  };


  s2: Sale = {
    id: 2,
    name: "Weed",
    buyingPrice: 57,
    sellingPrice: 77
  };

  salesArray: Sale[] = [this.s1, this.s2];

  constructor() { }

  ngOnInit(): void {
  }

}
