import { Component, OnInit } from '@angular/core';

import { Buyer } from '../../modal/buyerSearch'
import { Router} from '@angular/router'
import { DbServiceService } from'../../services/db-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  presentHistory=[]
  buyer:Buyer={
    buyerName:'',
    startDate:'',
    endDate:''
  }
  constructor(private router: Router, private dbService:DbServiceService) { }

  ngOnInit() {
  }
  onSubmit({value,valid}:{value:Buyer, valid:boolean}){
    if(localStorage.getItem('searches')=== null){
      localStorage.setItem('searches',JSON.stringify([value.buyerName]))
    }
    else{
      this.presentHistory = JSON.parse(localStorage.getItem('searches'))
      this.presentHistory.push(value.buyerName)
      localStorage.setItem('searches',JSON.stringify(this.presentHistory))
    }
    
    this.dbService.createDetails(value)
    this.router.navigate(['results'])
  }
}
