import { Component, OnInit } from '@angular/core';
import { Datehelper } from 'src/app/datehelper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeData: any = []
  attendanceData: any= []
  presentEmp: any= []
  absentEmp: any= []
  model: any = {}
loader: boolean = false
activeImage: boolean = false
  constructor() { }

  getEmployeeData(){
    this.employeeData =JSON.parse(localStorage.getItem ('Users')!)
  }
  getAttendanceData(){
    this,this.activeImage = true
    setTimeout(()=>{
      this.activeImage = false;
 }, 1000);
    this.model.date = Datehelper.setDate(this.model.date)
    this.attendanceData =JSON.parse(localStorage.getItem('attendanceData')!)
    let obj = this.attendanceData.filter((x: { date: any;}) => x.date == this.model.date)
    if(obj){
      this.presentEmp = obj.filter((x: {activity: any}) => x.activity == "Present")
      this.absentEmp = obj.filter((x: {activity: any}) => x.activity == "Absent")
    }

  }

  ngOnInit(): void {
    
    this.model.date = new Date
    this.getEmployeeData()
    this.getAttendanceData()
  }

}
