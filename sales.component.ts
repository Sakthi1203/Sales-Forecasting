import { Component, OnInit } from '@angular/core';
import { FlaskapiService } from '../flaskapi.service';
import { Router } from '@angular/router';
import { ReturndataService } from '../returndata.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers:[FlaskapiService]
})
export class SalesComponent implements OnInit{
  public file: any;
  predictForm: any;
  periodicity:any;
  range: any;
  ngOnInit(): void {
    this.predictForm = this.formBuilder.group({
      file: ['', Validators.required],
      periodicity: ['', Validators.required],
      range: ['', Validators.required],
    });
  }
 constructor(
   private flaskapi: FlaskapiService, private formBuilder: FormBuilder, private router: Router,
   private returndata: ReturndataService){}
 
 onFilechange(event: any) {

   this.file = event.target.files[0]
 }
 
 upload() {
   if (this.file) {
     this.flaskapi.postfile(this.file).subscribe(resp => {
       alert("File Uploaded")
     })
   } else {
     alert("Please select a file")
   }
 }
 prediction() {
    this.flaskapi.postfile1(this.file,this.periodicity, this.range).subscribe((response) => {
      console.log(response);
      this.returndata.setData(response);
      this.router.navigate(['/print']);
    })

 
}

}

