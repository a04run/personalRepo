import { Component, OnInit } from '@angular/core';

import { Buyer } from '../../modal/buyerSearch'
import { BuyerDetails } from '../../modal/buyerDetails'
import { Router} from '@angular/router'
import { DbServiceService } from'../../services/db-service.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: BuyerDetails[] 
  buyerName:any
  buyerId: any
  
  constructor(private router: Router, private dbService:DbServiceService) { }

  ngOnInit() {
    this.dbService.getResultsFromDb().subscribe(data =>{
      console.log(data)
      this.results = data
      this.buyerName = this.results[0].buyerUserName
      this.buyerId= this.results[0].buyerId
    })
  }

}
