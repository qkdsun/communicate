import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stockb',
  templateUrl: './stockb.component.html',
  styleUrls: ['./stockb.component.css']
})
export class StockbComponent implements OnInit {

    constructor() { }
	
	private dataToa:string = '';
	@Output()
	sentToParents:EventEmitter<string> = new EventEmitter();

    ngOnInit() {
    }
	
	// 发射数据
	sendToA(){
		this.sentToParents.emit(this.dataToa)
	}
}
