import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key : string) : any{
    const stringifyData = localStorage.getItem(key)
    return stringifyData ? JSON.parse(stringifyData) : null;
  }

  setItem(key : string, data : any) : void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  clearItems(keys : []) : void {
    keys.forEach(key => {
      localStorage.removeItem(key);
    })
  }

}
