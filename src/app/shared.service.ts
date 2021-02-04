import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44330/api" 
  constructor(private http:HttpClient) { }

  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/country');
  }

  addCountry(val:any){
    return this.http.post(this.APIUrl+'/country',val);
  }

  updateCountry(val:any){
    return this.http.put(this.APIUrl+'/country',val);
  }

  deleteCountry(val:any){
    return this.http.delete(this.APIUrl+'/country/'+val);
  }

  
  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/user');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/user',val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/user',val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/user/'+val);
  }

  getAllCountryNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/user/getAllCountryNames');
  }
}
