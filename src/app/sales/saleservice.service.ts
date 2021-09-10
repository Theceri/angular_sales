import { Injectable } from '@angular/core';
import { Sale } from './sales';

@Injectable({
  providedIn: 'root'
})

export class SaleserviceService {
  mySales: Sale[];

  getService(): Sale[] {
    //HTTP Request
    return [
      {
        id: 1,
        name: "Condoms",
        buyingPrice: 56,
        sellingPrice: 76
      },
      {
        id: 2,
        name: "Weed",
        buyingPrice: 57,
        sellingPrice: 77
      }
    ];
  }

  constructor() {
    this.mySales = this.getService();
  }
}
