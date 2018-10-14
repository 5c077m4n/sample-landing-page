import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from 'src/app/services/email.service';


@Component({
	selector: 'app-join-us',
	templateUrl: './join-us.component.html',
	styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
	public mailForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private email: EmailService,
	) {
		this.mailForm = this.fb.group({
			name: ['', Validators.required],
			from: ['', [Validators.required, Validators.email]],
			subject: ['', Validators.required],
			content: ['', Validators.required],
		});
	}
	ngOnInit() {}

	public onSubmit(): void {
		if(!this.mailForm.valid) return;
		this.email.send(this.mailForm.value)
			.subscribe(res => { if(res) console.log('Email sent successfully.'); });
	}
}
