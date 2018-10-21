import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  // falg:boolean = true;
  num = 1;
  change(event){
    this.num = event.target.value;
  }
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      this.course = data;
    })
    // this.course = this.http.get('/api/courses/'+this.courseId)
  }
}

// .pipe(map(data=>{
//       data.name = 'hahaha';
//       return data;
//     })).pipe(filter(data=>{
//       return data.id == 2;
//     }))