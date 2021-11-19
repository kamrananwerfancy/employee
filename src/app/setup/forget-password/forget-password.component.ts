import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
model:any = []
userData: any = []
detailview  = false
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialogRef<ForgetPasswordComponent>) { }
  getLoginData(){
    let parsedData = JSON.parse(localStorage.getItem('loginData')!);
    this.userData = parsedData
  }
  ngOnInit(): void {
    this.getLoginData()
  }
  fillUserName(){
  let obj = this.userData.find((x: {  email: any }) => x.email == this.model.email)
if(obj){
  this.model.userName = obj.userName
}
else{
this._snackBar.open('UserName Not Available on this Email' , 'OK',{
duration: 3500
})
}
  }
submit(){
  let obj = this.userData.find((x: { answer: any; userName: any; email:any }) => x.userName == this.model.userName && x.email == this.model.email && x.answer == this.model.answer )
  if(obj){
    this.detailview = true
this.model.demail = obj.email
this.model.duserName = obj.userName
this.model.dpassword = obj.pass
this._snackBar.open('Details Recoverd Succesfully', 'OK',{
  duration: 3500
})
  }
  else {
    this._snackBar.open('Please Enter Correct Info', 'OK',{
      duration: 3500
    })
  }
}
}
