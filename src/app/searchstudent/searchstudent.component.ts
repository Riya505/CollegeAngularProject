import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor() { }

  admissionNo=""

  readValues=()=>{
    let data={
      "admissionNo":this.admissionNo
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
