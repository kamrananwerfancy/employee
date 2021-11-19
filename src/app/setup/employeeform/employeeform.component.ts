import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Datehelper } from 'src/app/datehelper';
@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  userData: any = []
  attendanceData: any = []
  allattendanceData: any = []
  constructor(private httpClient: HttpClient, public dialog: MatDialogRef<EmployeeformComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,) {
  }
  model: any = {}
  citeis: any = []

  getemployeeattendancewithDate(){
  this.model.startDate = Datehelper.setDate(this.model.startDate)
  this.model.endDate = Datehelper.setDate(this.model.endDate)
  let startDate = this.model.startDate
  let endDate= this.model.endDate
  let obj = this.allattendanceData.filter(
    (  m: { employeeId: any; date: string | number ; }) => m.employeeId == this.model.userId && m.date >= startDate && m.date <= endDate);
  // let obj = this.allattendanceData.filter((x:{employeeId: any})=> x.employeeId == this.model.userId)
  if(obj){
    this.attendanceData = obj
  }
}
getemployeeattendance(){
  let obj = this.allattendanceData.filter((x:{employeeId: any})=> x.employeeId == this.model.userId)
  if(obj){
    this.attendanceData = obj
  }
}
  ageCalculator(){
    if(this.model.dob){
      const convertAge = new Date(this.model.dob);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.model.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
  getbyid() {
    if (this.data) {

      this.model = this.data
    }
    else {
      return
    }
  }
  getNewUserId() {
    const oldRecords = localStorage.getItem('Users');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      return userList.length + Math.random()
    } else {
      return 1;
    }
  }
  saveUser() {
if(this.data){
  this.userData.find((x: { userId: any; }, i: string | number)=>{
    if(x.userId == this.data.userId){
      this.userData[i] = this.model
      localStorage.setItem('Users', JSON.stringify(this.userData))
      this.dialog.close()
    }
  })
}
else{
       const latestId = this.getNewUserId();
     this.model.userId = latestId
      this.userData.push(this.model)
      localStorage.setItem('Users', JSON.stringify(this.userData))
      localStorage.setItem('attendanceData', JSON.stringify(this.userData))
      this.dialog.close()
    }
  }


  // getcity() {
  //   this.httpClient.get("https://countriesnow.space/api/v0.1/countries/population/cities").subscribe((data: any) => {
  //     this.citeis = data.data
  //   })
  // }
 
  getDate(){
    this.model.startDate = Datehelper.setDate(new Date)
    this.model.endDate = Datehelper.setDate(new Date)

  }
  ngOnInit() {
this.getDate()
  this.allattendanceData =JSON.parse(localStorage.getItem('attendanceData')!)

    if(this.data){
    this.getbyid()

  }
    this.userData = JSON.parse(localStorage.getItem('Users')!)
    // this.getcity()

  }
  ngAfterViewInit(): void{
    this.getemployeeattendance()

  }

}

