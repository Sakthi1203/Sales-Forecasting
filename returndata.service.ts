import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturndataService {
  private data:any;
  constructor() { }
  setData(data:any){
    localStorage.setItem('resultData',JSON.stringify(data));
  }
}
