import { Component,  OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AttendanceFormComponent } from '../attendance-form/attendance-form.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  test: string = "";
  model: any;
  attendanceData : any =[];
firstName: any;
p : number =1
  constructor(public dialog: MatDialog) {
  }

  key : string = 'id';
  reverse: boolean =false
  sort(key: string){
  this.key = key;
  this.reverse = !this.reverse
  }
  search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }
    else{
      this.attendanceData = this.attendanceData.filter((res: { firstName: string; }) =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }
  openDialog() {
  const dialog =  this.dialog.open(AttendanceFormComponent,{
    height: 'auto',
    width: '70%',
    });
    dialog.afterClosed().subscribe(result =>{
      this.getattendanceData()
      this.firstName = []
    })
}
edit(attendanceId: any) {
  const dialog = this.dialog.open(AttendanceFormComponent, {
    height: 'auto',
    width: '70%',
    data: this.attendanceData.find((x: { attendanceId: any }) => x.attendanceId == attendanceId)
  });
  dialog.afterClosed().subscribe(result => {
    this.getattendanceData()
  })
}
remove(i:any){
 this.attendanceData.splice(i,1)
localStorage.setItem('attendanceData', JSON.stringify(this.attendanceData))

this.getattendanceData();
}

getattendanceData(){
  let parsedData = JSON.parse(localStorage.getItem('attendanceData')!);
  this.attendanceData = parsedData
}
  ngOnInit(): void {
    this.getattendanceData()
  }


}
