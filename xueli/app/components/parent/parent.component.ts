import { Component, OnInit } from '@angular/core';
import { Common1Service } from 'src/app/services/common1.service';
import { Common2Service } from 'src/app/services/common2.service';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // providers:[Common1Service]     //优先找这里。如果没有在跟组件声明这个服务，那么只能在当前组件及其子组件可以调用
  providers:[ShareService]
})
export class ParentComponent implements OnInit {

  // data;
  // data1 = ['a','b','c','d','e'];
  // del(i){
  //   this.local.set('list',this.data);
  //   this.data.splice(i,1);
  // }
  constructor(private share:ShareService) {     //声明，不用实例化，依赖

  }

  add(){
    this.share.add(100);
  }
  ngOnInit() {
    // if(this.local.get('list')){
    //   this.data = this.local.get('list').split(',');
    // }else{
    //   this.data=[1,2,3,4,5,6,7];
    // }
    
    // this.local.set('name','jia');
  }

}
