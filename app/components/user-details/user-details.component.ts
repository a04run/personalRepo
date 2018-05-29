import { Component, OnInit } from '@angular/core';

import { Buyer } from '../../modal/buyerSearch'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { DbServiceService } from'../../services/db-service.service'
import { BuyerDetails } from '../../modal/buyerDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:number
  details: BuyerDetails
  constructor(private router: Router, private dbService:DbServiceService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.details = this.dbService.getIndividualRequest(this.id)
    console.log(this.details)
  }

}
