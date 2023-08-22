import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private http: HttpClient) { }
    url: string = 'http://localhost:3000/api/'
    post(endpoint: string, data: any){
        return this.http.post(this.url + endpoint, data)
    }
    put(endpoint: string, data: any){
        return this.http.put(this.url + endpoint, data)
    }
    get(endpoint: string){
        return this.http.get(this.url + endpoint)
    }
    delete(endpoint: string){
        return this.http.delete(this.url + endpoint)
    }
}