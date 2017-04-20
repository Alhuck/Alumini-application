import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

export class Menus {
    name: string;
    icon:string;
    link:string;
    constructor(name:string, icon:string, link:string) {
        this.name = name;
        this.icon = icon;
        this.link = link;
    }
}

export class User {
    firstName: string;
    lastName:string;
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export interface Alumini {
    sno;
    idNo;
    regNoa;
    name;
}

export const mockMenus: Menus[] =
     [
        new Menus("Home", "d", "home"),
        new Menus("Alumini", "d", "aluminiList")
     ]

@Injectable()
export class UserService {

    private baseUrl: string = 'http://localhost:8081/aluminiApp';
    constructor(private http : Http, private requestOptionArgs:RequestOptions) {

    }

    private getHeaders() {

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private getAuthenticatedHeaders(headers:Headers) {

        headers.append('Accept', 'application/json');
        headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
        return headers;
    }

    getUserMenus() : Promise<Menus[]> {
        return Promise.resolve(mockMenus);
    }

    getLoggedUserDetails(): Promise<any> {
        let headers: Headers = new Headers();
        let options: RequestOptions = new RequestOptions({ headers: this.getAuthenticatedHeaders(headers) });
        return this.http.get(`${this.baseUrl}/ums/getUser`, options).toPromise();
    }

    getAllAuminiList() {
        let headers: Headers = new Headers();
        return this.http.get(`${this.baseUrl}/ums/getAllAluminiList`, {headers: this.getAuthenticatedHeaders(headers)}).toPromise();
    }

    signInUser(userName:string, userPwd:string): Promise<any> { //need to find out how to send a variables to server
        // let urlSearchParams = new URLSearchParams();
        // urlSearchParams.append("name", userName);
        // urlSearchParams.append("password", userPwd);

        let body = { name: userName, password: userPwd };
        return this.http.post(`${this.baseUrl}/user/login`, body, {headers: this.getHeaders()}).toPromise();
    }
    isLoggedUser:boolean;
    setLoggedUser(val:boolean) {
        this.isLoggedUser = val;
    }

    getIsLoggedUser() {
        return this.isLoggedUser;
    }
}