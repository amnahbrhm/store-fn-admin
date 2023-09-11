import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private http: HttpClient) { }
    post(endpoint: string, data: any){
        return this.http.post(environment.url + endpoint, data)
    }
    put(endpoint: string, data: any){
        return this.http.put(environment.url + endpoint, data)
    }
    get(endpoint: string){
        return this.http.get(environment.url + endpoint)
    }
    delete(endpoint: string){
        return this.http.delete(environment.url + endpoint)
    }
}