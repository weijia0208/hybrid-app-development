import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {

  shequ;
  shequId:number;
  community;
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.shequId = this.router.snapshot.params['shequId'];
    this.http.get('/api/shequs/'+this.shequId).subscribe(data=>{
      this.shequ = data;
    })
    // this.shequId = this.router.snapshot.params['shequId'];
    this.http.get('/api/communities/'+this.shequId).subscribe(data=>{
      this.community = data;
    })
  }

}

class Shequ{
  constructor(
      public id:number,
      public imgs:string,
      public article:string
  ){}
}
class Community{
  constructor(
      public id:number,
      public headpic:string,
      public images:string,
      public articleName:string,
      public article:string,
      public Name:string,
      public data:string,
      public reading:number,
      public common:number
  ){}
}
