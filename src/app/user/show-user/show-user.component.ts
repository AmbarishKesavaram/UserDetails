import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];
  ModalTitle: string="";
  ActivateAddEditUserComp:boolean=false;
  user:any;
  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      UserId:0,
      UserName:"",
      CountryName:"",
      PhoneNumber:""
    }
    this.ModalTitle="Add User"
    this.ActivateAddEditUserComp=true;
}

closeClick(){
  this.ActivateAddEditUserComp=false;
  this.refreshUserList();
}

editClick(item: any){
  this.user=item;
  this.ModalTitle="Edit User"
  this.ActivateAddEditUserComp=true;

}

deleteClick(item:any){
  if(confirm("Are you Sure??")){
    this.service.deleteUser(item.userId).subscribe(data=>
      {
        alert(data.toString());
        this.refreshUserList();
      })
  }
}

refreshUserList(){
  this.service.getUserList().subscribe(data=>{
    this.UserList = data;
    console.log(this.UserList);
  });
}

}
