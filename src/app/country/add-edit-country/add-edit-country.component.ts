import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() con:any;
  countryId:string="";
  countryName:string="";

  ngOnInit(): void {
    this.countryId = this.con.countryId;
    this.countryName = this.con.countryName;
  }

  addCountry(){
      var val={
        CountryId:this.countryId,
        CountryName:this.countryName
      };
      this.service.addCountry(val).subscribe(res=>
        {
          alert(res.toString());
        })
  }

  updateCountry(){
    var val={
      CountryId:this.countryId,
      CountryName:this.countryName
    };
    this.service.updateCountry(val).subscribe(res=>
      {
        alert(res.toString());
      })
  }

}
