import { Injectable } from '@angular/core';

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

export const mockMenus: Menus[] =
     [
        new Menus("Home", "d", "home"),
        new Menus("Alist", "d", "aluminiList")
     ]

@Injectable()
export class UserService {

    getUserMenus() : Promise<Menus[]> {
        return Promise.resolve(mockMenus);
    }    
}