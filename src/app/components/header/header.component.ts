import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public bgImageSrc = 'assets/images/backgrounds/header-bg-1.png';
	constructor() {}
	ngOnInit() {
		window.setInterval(() => {
			this.bgImageSrc = `assets/images/backgrounds/header-bg-${this.rndInteger(1, 2)}.png`;
		}, 5000);
	}

	private rndInteger(min: number, max: number): number {
		return (Math.floor(Math.random() * (max - min + 1)) + min);
	}
}
