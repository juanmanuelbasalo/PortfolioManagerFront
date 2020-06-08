
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TopSecretService {

    constructor(private http: HttpClient) {

    }

    fetchTopSecretData(token: string): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: token
            })
        };
        return this.http.get('http://localhost:5000/api/users/GetAllUsers', httpOptions);
    }
}