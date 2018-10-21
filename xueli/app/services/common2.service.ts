import { Injectable } from '@angular/core';
import { Common1Service } from 'src/app/services/common1.service';
import { LogService } from 'src/app/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class Common2Service implements Common1Service{

  constructor(private log:LogService) { }

  set(key,value){
    this.log.log("set方法调用了");
    localStorage.setItem(key,value);
  }
  get(key){
    console.log("get方法调用了");
    return localStorage.getItem(key);
  }

}
