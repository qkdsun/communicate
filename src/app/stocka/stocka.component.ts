import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stocka',
  templateUrl: './stocka.component.html',
  styleUrls: ['./stocka.component.css']
})
export class StockaComponent implements OnInit {

  constructor() { }
  
    @Input()
	private getParentData:string = ''; // 接受父组件的值

	sonData:string = ''; // 向父组件传值
	
	@Input()
	private bdata:string = ''
	
	@Output()
	Toparents:EventEmitter<String> = new EventEmitter()
    
	ngOnInit() {

	}
	// 向父组件发送数据
	sendToParents(){
		this.Toparents.emit(this.sonData); 
	}
}
