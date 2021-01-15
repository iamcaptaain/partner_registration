import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private readonly name : String,
    private readonly contact : number,
    private readonly password : String,
    private readonly image : object
  ){ }
}
