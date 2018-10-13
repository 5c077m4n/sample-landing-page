import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const modules = [
	MatToolbarModule,
	MatTabsModule,
	MatFormFieldModule,
	MatInputModule,
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