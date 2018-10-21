import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[ShareService]         //????????
})
export class ChildComponent implements OnInit {

  constructor(private share:ShareService) { }

  // index = 0;
  // log(msg){
  //   console.log(`这是第${this.index++}次调用,调用钩子函数是${msg}`);
  // }
  // @Input() arr;
  // @Output() delIndex = new EventEmitter<number>();
  // del(i){
  //   this.delIndex.emit(i);
  // }

  arr;
  
  ngOnInit() {
    this.arr = this.share.data;
  }

}
