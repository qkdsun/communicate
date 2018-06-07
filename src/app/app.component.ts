import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    private parentDate:string = '';
	
	getSonData: String = '';
	
	Bdata:string = ''
	
    ToparentsHandler(ev:String){
		this.getSonData = ev
	}
	getBdata(ev:string){
		this.Bdata = ev
	}
}
