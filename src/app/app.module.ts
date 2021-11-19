import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './setup/employee/employee.component';
import { MatSliderModule } from '@angular/material/slider';
import { EmployeeformComponent } from './setup/employeeform/employeeform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { NavbarComponent } from './setup/navbar/navbar.component';
import { HomeComponent } from './setup/home/home.component';
import { SalaryissueComponent } from './setup/salaryissue/salaryissue.component';
import { LoginComponent } from './setup/login/login.component';
import { SalaryformComponent } from './setup/salaryform/salaryform.component';
import { SignupComponent } from './setup/signup/signup.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ForgetPasswordComponent } from './setup/forget-password/forget-password.component';
import { AttendanceComponent } from './setup/attendance/attendance.component';
import { AttendanceFormComponent } from './setup/attendance-form/attendance-form.component';
import { DeleteComponent } from './setup/delete/delete.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TextComponent } from './setup/text/text.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeformComponent,
    NavbarComponent,
    HomeComponent,
    SalaryissueComponent,
    LoginComponent,
    SalaryformComponent,
    SignupComponent,
    ForgetPasswordComponent,
    AttendanceComponent,
    AttendanceFormComponent,
    DeleteComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxMaterialTimepickerModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
