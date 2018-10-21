import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tongdetails',
  templateUrl: './tongdetails.component.html',
  styleUrls: ['./tongdetails.component.css']
})
export class TongdetailsComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  detail;
  detailId:number;
  ngOnInit() {
    this.detailId = this.router.snapshot.params['detailId'];
    this.http.get('/api/details/'+this.detailId).subscribe(data=>{
      console.log(data);
      this.detail = data;
    })
    
  }

}

class Detail{
  constructor(
      public id:number,
      public renwu:string,
      public name:string,
      public time:string,
      public img:string
  ){}
}
