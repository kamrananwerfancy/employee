import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  username: any
  password: any;
  model: any = []
  user: any = {};
  userData: any =[]
  constructor(private _snackBar: MatSnackBar,private route:Router) { }
  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('loginData')) {
      users = JSON.parse(localStorage.getItem('loginData')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('loginData', JSON.stringify(users));
  }
  checkEmail(){
    let obj = this.userData.find((x: { email: any;}) => x.email == this.model.email)
    if(obj){
      this._snackBar.open('Email Already Exist', "OK",{
        duration:3500
      })
    }
  }
  checkUser(){
    let obj = this.userData.find((x: { userName: any;}) => x.userName == this.model.userName)
    if(obj){
      this._snackBar.open('User Name Already Exist', "OK",{
        duration:3500
      })
    }
  }
  saveUser() {
    if (!this.model.fullName) {
      this._snackBar.open('Please Enter Full Name', 'OK', {
        duration: 3500
      });
    }
    else if (!this.model.email) {
      this._snackBar.open('Please Enter Email', 'OK', {
        duration: 3500
      });
    }
    else if (!this.model.userName) {
      this._snackBar.open('Please Enter UserName', 'OK', {
        duration: 3500
      });
    }
    else if (!this.model.pass) {
      this._snackBar.open('Please Create 8 Digit Password', 'OK', {
        duration: 3500
      });
    }
    else if (this.model.pass.length < 8) {
      this._snackBar.open('Please Create 8 Digit Password', 'OK', {
        duration: 3500
      });
    }

    else if (this.model.pass !=this.model.confrimPass) {
      this._snackBar.open('Password Not Same', 'OK', {
        duration: 3500
      });
    }
    else if (!this.model.answer) {
      this._snackBar.open('Please Enter 1 Name for Your Password Recovery', 'OK', {
        duration: 3500
      });
    }

    else {
      this.user = Object.assign(this.user, this.model)
      this.addUser(this.user);
      this.route.navigate(['/login'])
      this._snackBar.open('Now you can Login to your account', 'OK', {
        duration: 3500
      });
    }

  }
  getLoginData(){
    let parsedData = JSON.parse(localStorage.getItem('loginData')!);
    this.userData = parsedData
  }
  ngOnInit(): void {
    this.getLoginData()
  }


}
