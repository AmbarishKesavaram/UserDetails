import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user:any;
  userid:string="";
  userName:string="";
  countryName:string="";
  phoneNumber:string="";

  CountriesList:any=[];
  
  ngOnInit(): void {
    this.loadCountryList();
  }

  loadCountryList(){
    this.service.getAllCountryNames().subscribe((data:any)=>{
      this.CountriesList=data;

    this.userid = this.user.userId;
    this.userName= this.user.userName;
    this.countryName = this.user.countryName;
    this.phoneNumber = this.user.phoneNumber;
    })
  }

  addUser(){
    var val={
      UserId:this.userid,
      UserName:this.userName,
      CountryName:this.countryName,
      PhoneNumber:this.phoneNumber
    };
    this.service.addUser(val).subscribe(res=>
      {
        alert(res.toString());
      })
}

updateUser(){
  var val={
    UserId:this.userid,
      UserName:this.userName,
      countryName:this.countryName,
      PhoneNumber:this.phoneNumber
  };
  this.service.updateUser(val).subscribe(res=>
    {
      alert(res.toString());
    })
}

}
