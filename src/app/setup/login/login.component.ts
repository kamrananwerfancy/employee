import { Component, OnInit } from '@angular/core';
import {  MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  username:any
  password:any;
  model: any = []
  userData: any = []
  constructor(private _snackBar:MatSnackBar,private route:Router,public dialog:MatDialog) { }

  Login() {
    let obj = this.userData.find((x: { userName: any; pass:any }) => x.userName == this.model.userName && x.pass == this.model.password)
    if(obj){
      this.route.navigate(['/home'])
      localStorage.setItem('loginUser',obj.fullName)
    }
    else {
      this._snackBar.open('Please Enter Correct UserName or Password', 'OK',{
        duration: 3500
      })
    }

  }

  forget(){
    const dialog =  this.dialog.open(ForgetPasswordComponent,{
      height: 'auto',
      width: '70%',
      });
      dialog.afterClosed().subscribe(result =>{
      })
  }
  getLoginData(){
    let parsedData = JSON.parse(localStorage.getItem('loginData')!);
    this.userData = parsedData
  }
  ngOnInit(): void {
    this.getLoginData()
  }

}
