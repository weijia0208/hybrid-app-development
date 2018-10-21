import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import{Common1Service} from './services/common1.service'
import{Common2Service} from './services/common2.service'
import { RouterModule,Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { TongdetailsComponent } from './components/tongdetails/tongdetails.component';
import { APipe } from './a.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    ShequdetailComponent,
    TongdetailsComponent,
    APipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent,children:[
        {path:'tong/:detailId',component:TongdetailsComponent},
      ]},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:'course/:sourseId',component:CoursedetailComponent},
      {path:'shequ/:shequId',component:ShequdetailComponent},
      
      // {path:'**',component:ShequComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Common1Service,
    {provide:Common1Service,useClass:Common2Service}
  ],            // 用于配置注入器，注入器通过它来创建被依赖对象的实例
  bootstrap: [AppComponent]
})
export class AppModule { }
