import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteComponent } from '../delete/delete.component';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  test: string = "";
  model: any;
  employeeData: any = [];
  attendanceData: any = []
  firstName: any;

  p: number = 1
  constructor(private httpClient: HttpClient, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }
  key: string = 'id';
  reverse: boolean = false
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse
  }
  search() {
    if (this.firstName == "") {
      this.ngOnInit();
    }
    else {
      this.employeeData = this.employeeData.filter((res: { firstName: string; }) => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }
  openDialog() {
    const dialog = this.dialog.open(EmployeeformComponent, {
      height: 'auto',
      width: '70%',
    });
    dialog.afterClosed().subscribe(result => {
      this.getemployeeData()
      this.firstName = []
    })
  }
  editData(userId: any) {
    const dialog = this.dialog.open(EmployeeformComponent, {
      height: 'auto',
      width: '70%',
      data: this.employeeData.find((x: { userId: any }) => x.userId == userId)
    });
    dialog.afterClosed().subscribe(result => {
      this.getemployeeData()
      this.firstName = []

    })
  }

  confrimdelete(userId: any) {
    const dialogconfig = new MatDialogConfig();
    const dialogref = this.dialog.open(DeleteComponent, dialogconfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.remove(userId)
      }
    })
  }
  remove( userId: any) {
    let obj = this.attendanceData.find((x: { employeeId: any }) => x.employeeId == userId)
    if (obj) {
      this._snackBar.open('Record Cannot be Deleted It is Refrence used in Attendance', "OK", {
        duration: 3500
      })
    }
    else {
      this.employeeData.find((x: { userId: any; }, i: string | number) => {
        if (x.userId == userId) {
          this.employeeData[i] = this.model
          this.employeeData.splice(i, 1)
          localStorage.setItem('Users', JSON.stringify(this.employeeData))

          this.employeeData();
        }
      })
    }
  }
  getcity() {
    this.httpClient.get("https://countriesnow.space/api/v0.1/countries/population/cities").subscribe((data: any) => {
      this.test = data.city;
    })
  }
  getemployeeData() {
    let parsedData = JSON.parse(localStorage.getItem('Users')!);
    this.employeeData = parsedData
  }
  getattendanceData() {
    this.attendanceData = JSON.parse(localStorage.getItem('attendanceData')!)
  }
  ngOnInit(): void {
    this.getattendanceData()
    this.getemployeeData()
  }


}
