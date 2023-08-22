import { Injectable } from '@angular/core';
import { createQueryString } from 'src/shared/functions/createQueryString';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({providedIn: 'root'})
export class ItemsService {
    constructor(private http: HttpService) { }

    addProduct(fd: FormData){
        return this.http.post('items', fd)
    }
    getProduct(params?: any){
        const query= createQueryString(params)
        return this.http.get(`items${query}`)
    }
    editProduct(fd: FormData, id: string){
        return this.http.put(`items?id=${id}`, fd)
    }
    deleteProduct(id: string){
        return this.http.delete(`items?id=${id}`)

    }
    
}