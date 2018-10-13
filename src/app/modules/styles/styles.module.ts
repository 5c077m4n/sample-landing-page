import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


const modules = [
	MatToolbarModule,
	MatTabsModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatMenuModule,
];

@NgModule({
	imports: [
		CommonModule,
		...modules
	],
	exports: [
		...modules
	],
	declarations: []
})
export class StylesModule {}
