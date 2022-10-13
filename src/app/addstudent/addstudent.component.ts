import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  rollno=""
  college=""
  admissionNo=""
  parentName=""
  dateOfBirth=""
  address=""
  mobile=""
  parentMobile=""
  email=""
  bloodGroup=""

  readValues=()=>{
    let data={
      "name":this.name,
      "rollno":this.rollno,
      "college":this.college,
      "admissionNo":this.admissionNo,
      "parentName":this.parentName,
      "dateOfBirth":this.dateOfBirth,
      "address":this.address,
      "mobile":this.mobile,
      "parentMobile":this.parentMobile,
      "email":this.email,
      "bloodGroup":this.bloodGroup
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
