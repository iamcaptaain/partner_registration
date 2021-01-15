import { PartnerService } from './../../shared/partner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PartnerService]
})
export class LoginComponent implements OnInit {

  constructor( private partnerService:PartnerService) { }

  ngOnInit(): void {
  }

}
