import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  txt:string;
  @Output() appendValue = new EventEmitter();
  fun(e){
    if(e.keyCode==13){
      this.append();
      this.txt='';
    }
  }
  append(){
    this.appendValue.emit(new Msg(this.txt,false));
  }
  constructor() { }

  ngOnInit() {
  }

}

export class Msg{
  constructor(public title:string,public done:boolean){}
}
