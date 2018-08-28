import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;
  
  constructor() {
    console.log('Hello WoocommerceProvider Provider');
    
    this.Woocommerce = WC({
      url: "https://www.yourwebsite.com",
      consumerKey: "ck_*****",
      consumerSecret: "cs_*****",
      wpAPI: true,
      version: "wc/v1",
      queryStringAuth: true
    });
     
     this.WoocommerceV2 = WC({
      url: "https://www.yourwebsite.com",
      consumerKey: "ck_*****",
      consumerSecret: "cs_*****",
      wpAPI: true,
      version: "wc/v2",
      queryStringAuth: true
    });
     console.log(this.Woocommerce);
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }
}
