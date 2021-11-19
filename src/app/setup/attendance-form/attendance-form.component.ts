import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Datehelper } from 'src/app/datehelper';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {
  attendanceData: any = []
  employeeData: any = []
  constructor(public dialog: MatDialogRef<AttendanceFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,) {
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return  day !== 0;
  };
  model: any = {}

  getbyid() {
    if (this.data) {
      this.model = this.data
    }
    else {
      return
    }
  }
  getUserId() {
    let obj = this.employeeData.find((x: { firstName: any }) => x.firstName == this.model.employeeName)
    if (obj) {
      this.model.employeeId = obj.userId
    }
  }
  getNewUserId() {
    const oldRecords = localStorage.getItem('attendanceData');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      return userList.length + Math.random()
    } else {
      return 1;
    }
  }

  submit() {
    if (this.data) {
      this.attendanceData.find((x: { attendanceId: any; }, i: string | number) => {
        if (x.attendanceId == this.data.attendanceId) {
          this.attendanceData[i] = this.model
          localStorage.setItem('attendanceData', JSON.stringify(this.attendanceData))
          this.dialog.close()
        }
      })
    }
    else {
      this.model.date = Datehelper.setDate(this.model.date)
      let obj = this.attendanceData.find((x: { date: any; employeeName: any }) => x.date == this.model.date && x.employeeName == this.model.employeeName)
      if (obj) {
        this._snackBar.open('This Employee Attendance Already Marked.', "OK", {
          duration: 3500
        })
      }
      else {
        if (!this.model.employeeName) {
          this._snackBar.open('Please Select Employee', "OK", {
            duration: 3500
          })
        }
        else if (!this.model.date) {
          this._snackBar.open('Please select Date', "OK", {
            duration: 3500
          })
        }
        else if (!this.model.activity) {
          this._snackBar.open('Please select Activity', "OK", {
            duration: 3500
          })
        }
        else if (this.model.activity == "Present" && !this.model.inTime) {
          this._snackBar.open('Please Select In Time', "OK", {
            duration: 3500
          })
        }
        else {
          const latestId = this.getNewUserId();
          this.model.attendanceId = latestId
          this.getUserId()
          this.attendanceData.push(this.model)
          localStorage.setItem('attendanceData', JSON.stringify(this.attendanceData))
          this.dialog.close()
        }
      }
    }
  }
  getemployeeData() {
    this.employeeData = JSON.parse(localStorage.getItem('Users')!)
  }
  ngOnInit() {
    this.getemployeeData()
    this.attendanceData = JSON.parse(localStorage.getItem('attendanceData')!)
    if (this.data) {
      this.getbyid()
    }
  }

}

