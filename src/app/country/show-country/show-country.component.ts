import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  CountryList:any=[];

  ModalTitle: string="";
  ActivateAddEditCountryComp:boolean=false;
  con:any;
  ngOnInit(): void {
    this.refreshCountryList();
  }
  addClick(){
      this.con={
        CountryId:0,
        CountryName:""
      }
      this.ModalTitle="Add Country"
      this.ActivateAddEditCountryComp=true;
  }

  closeClick(){
    this.ActivateAddEditCountryComp=false;
    this.refreshCountryList();
  }

  editClick(item: any){
    this.con=item;
    this.ModalTitle="Edit Country"
    this.ActivateAddEditCountryComp=true;

  }

  deleteClick(item:any){
    if(confirm("Are you Sure??")){
      this.service.deleteCountry(item.countryId).subscribe(data=>
        {
          alert(data.toString());
          this.refreshCountryList();
        })
    }
  }

  refreshCountryList(){
    this.service.getCountryList().subscribe(data=>{
      this.CountryList = data;
    });
  }

}
