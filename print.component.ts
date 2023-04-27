import { Component, OnInit} from '@angular/core';
import { ReturndataService } from '../returndata.service';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit{
  rmse:any;//root mean squared error
  mse:any;//mean squared error
  mape:any;//mean absolute percentage deviation
  mae:any;//men absolute error
  value:any;
  result:boolean=false;
  constructor(private returndata:ReturndataService, private flaskapi: FlaskapiService){}
  ngOnInit(): void {
    this.result=true;
    this.value=localStorage.getItem('resultData')
    this.value=JSON.parse(this.value)
    if(this.value){
      console.log("Working")
      this.rmse=this.value['rmse'];
      this.mse=this.value['mse'];
      this.mape=this.value['mape'];
      this.mae=this.value['mae'];
    }
  }

}