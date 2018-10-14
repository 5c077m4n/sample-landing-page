import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Buffer } from 'buffer';
import { google } from 'googleapis';


@Injectable({ providedIn: 'root' }) export class EmailService {
	private readonly apiKey = 'AIzaSyAhQ5AEFxjkiW5BnfWaBipsExcZJeynrqo';
	private readonly URL = `https://www.googleapis.com/gmail/v1/users/me/messages/send`;
	private readonly scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
	private readonly creds = {
		"client_id": "404181749386-0r1c5ho00cv991d17h24aa60fdoe0fh5.apps.googleusercontent.com",
		"project_id": "sample-landing-p-1539496358822",
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://www.googleapis.com/oauth2/v3/token",
		"auth_provider_x509_cert_url": "",
		"client_secret": "YP2HiqjXvt2VPbVHn-VZoTK7",
		"redirect_uris": [
			"urn:ietf:wg:oauth:2.0:oob",
			"http://localhost"
		]
	};
	private readonly httpOptions: {};
	constructor(private http: HttpClient) {
		this.httpOptions = {
			port: '443',
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': `Bearer ${this.apiKey}`
			})
		};
	}

	public send(mailForm: any): Observable<any> {
		const encodedMail = new Buffer(
			`Content-Type: text/plain; charset="UTF-8"
			IME-Version: 1.0
			To: test@selected.co.il
			From: ${mailForm.from}
			Subject: ${mailForm.subject} - ${mailForm.name}
			${mailForm.content}`
		).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
		return this.http.post(this.URL, { raw: encodedMail }, this.httpOptions)
			.pipe(tap(res => {
				if(!res) console.error('Then email was not sent.');
			}));
	}
}
