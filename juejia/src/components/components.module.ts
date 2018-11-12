import { NgModule } from '@angular/core';
import { JiajuComponent } from './jiaju/jiaju';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { ShouyeComponent } from './shouye/shouye';
@NgModule({
	declarations: [JiajuComponent,
    ShouyeComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [JiajuComponent,
    ShouyeComponent]
})
export class ComponentsModule {}
