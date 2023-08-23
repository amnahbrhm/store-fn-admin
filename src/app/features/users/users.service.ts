import { Injectable } from '@angular/core';
import { createQueryString } from 'src/shared/functions/createQueryString';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpService) { }


    getUsers(params?: any) {
        const query = createQueryString(params)
        return this.http.get(`users${query}`)
    }
    changeRole(obj: any) {
        // const query = createQueryString(params)
        return this.http.post(`users/changeRole`, obj)
    }
    delete(params?: any) {
        const query = createQueryString(params)
        return this.http.delete(`users${query}`)
    }

}