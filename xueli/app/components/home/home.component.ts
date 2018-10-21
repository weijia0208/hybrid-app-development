import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  // timer = null;
  course;
  headers = new HttpHeaders({});
  ngOnInit() {
    // this.timer = setInterval(function(){
    //   console.log(11);
    // },1000);
    // this.http.get('/api/courses/1').subscribe((data) => {               //订阅subscribe是一个观察者，前边的是被观察者
    //   console.log(data);
    //   this.course = data;
    // })   
    // this.http.post('/api',{name:'jiajia',pwd:123},{headers:this.headers}).subscribe((data) => {              
    //   console.log(data);
    //   // this.course = data;
    // })    
  }
  // ngOnDestroy(){
  //   clearInterval(this.timer);
  // }

}
