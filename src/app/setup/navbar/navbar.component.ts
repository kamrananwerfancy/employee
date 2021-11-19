import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  userName: any
  signOut() {
    this.route.navigate(["/login"])
    history.pushState( null,location.href);
    window.onpopstate = function(event) {
       history.go(1);
    };
  }
  getuserName() {
    this.userName = localStorage.getItem('loginUser')
  }
  constructor(private observer: BreakpointObserver, private route: Router) { }
  step = 0;
  step1 = 0;
  setstep(index: number) {
    this.step = index;
  }
  setstep1(index: number) {
    this.step1 = index;
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }


  ngOnInit(): void {
    this.getuserName()
  }



}
