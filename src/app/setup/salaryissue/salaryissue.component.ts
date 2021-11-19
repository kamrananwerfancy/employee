import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalaryformComponent } from '../salaryform/salaryform.component';

@Component({
  selector: 'app-salaryissue',
  templateUrl: './salaryissue.component.html',
  styleUrls: ['./salaryissue.component.css']
})
export class SalaryissueComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialog =  this.dialog.open(SalaryformComponent,{
      height: 'auto',
      width: '70%',
      })
  }
  ngOnInit(): void {
  }

}
