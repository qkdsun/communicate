import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockaComponent } from './stocka/stocka.component';
import { StockbComponent } from './stockb/stockb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StockaComponent,
    StockbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 双向数据绑定
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
