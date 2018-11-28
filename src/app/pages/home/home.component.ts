import { Component } from '@angular/core';
import { HeaderComponent } from '../static/header/header.component';

@Component({

	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss']

})

export class HomeComponent {


	public cours:any;
	public visible;


	constructor(){


		this.cours = [{}, {}, {}];
		this.visible = true;

	}

	ngOnInit(){

	}


}