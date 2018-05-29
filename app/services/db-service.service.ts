import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators'
import { Observable,BehaviorSubject } from 'rxjs'

import { BuyerDetails } from '../modal/buyerDetails'
import { Buyer } from '../modal/buyerSearch'

let tempDetails:BuyerDetails[] = [
  {
    serialNumber:0,auditInsertTimestamp:'15266369662429',buyerId:'random',buyerUserName:'arun',
    operationType:'GET_CART',mainCartItemCount:21,errorNames:['error1','error 2','error 3'],
    calLink:'link',cartItems:[{'itemid':123,'variation':0}],responseType:'Succeed',sflItemCOunt:0,
    clientAppName:'Unkonwn',siteId:0,countOfitemsToCheckout:2,checkoutType:null,
    itemsToCheckout:null,checkoutCartFilterReason:null,checkoutSessionTocken:null,downstreamUnknownErrors:['Cops_Shipping'],
    eventType:null,externalErrornames:[],guestUser:false,buyerGuid:null,notificationNames:['Sale_ENDED']
  },
  {
    serialNumber:1,auditInsertTimestamp:'15266369662429',buyerId:'random',buyerUserName:'arun',
    operationType:'GET_CART',mainCartItemCount:21,errorNames:['error1','error 2','error 3'],
    calLink:'link',cartItems:[{'itemid':123,'variation':0}],responseType:'Succeed',sflItemCOunt:0,
    clientAppName:'Unkonwn',siteId:0,countOfitemsToCheckout:2,checkoutType:null,
    itemsToCheckout:null,checkoutCartFilterReason:null,checkoutSessionTocken:null,downstreamUnknownErrors:['Cops_Shipping'],
    eventType:null,externalErrornames:[],guestUser:false,buyerGuid:null,notificationNames:['Sale_ENDED']
  }
]

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  data: Observable<any>
  postUrl:string="url to hit"
  temp= new BehaviorSubject<BuyerDetails[]>(tempDetails)
  sendingData = this.temp.asObservable()
  resultTemp=null
  constructor() { }

  // getDetails(value: Buyer):Observable<BuyerDetails[]>{
  //   console.log("post service called");
  //   return this.sendingData
  // }

  createDetails(param: Buyer):void{
    console.log(param)
    this.resultTemp = this.sendingData
    console.log(this.resultTemp)
  }

  getResultsFromDb():Observable<BuyerDetails[]>{
    return this.sendingData
  }

  getIndividualRequest(index: number):BuyerDetails{
    return this.temp.value[index]
  }
}
