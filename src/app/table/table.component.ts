import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  FormBuilder,  } from '@angular/forms';
import { FormService } from '../form.service';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { fildsname } from '../form/form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit, AfterViewInit {
  // using for pagination & sort header
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild('loginform', {static: false})
  loginform:any;
  student: Student[] = [];
  usersdetails:any;
  userModeObj : fildsname = new fildsname;

  // columns we will show on the table
  displayedColumns: string[] = ['id', 'fName', 'lName', 'email', 'mobile', 'action', 'action2'];

  //the source where we will get the data
  dataSource!: MatTableDataSource<Student>;

  //dependency injection
  constructor(private formservice: FormService, private frmbuilder:FormBuilder, private route:Router) { }

  ngOnInit() {


    //call this method on component load
    this.getusers();
  }

  ngAfterViewInit() {

  }

  /**
   *Table with Data filtering
   */
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }



  // get user
  getusers() {
    this.formservice.getuser().subscribe(res => {
      this.dataSource = res;
    })
  }

  // delete user
  deleteuser(element:any) {
    this.formservice.deleteuser(element.id).subscribe(res => {
      alert("delet user id successfully");
      this.getusers();
    })
  }

  // eadit user
  edituser(stu:any) {
    this.userModeObj.id = stu.id;
  }

  // update user
  updateuser() {
    this.userModeObj.fName = this.loginform.value.fName;
    this.userModeObj.lName = this.loginform.value.lName;
    this.userModeObj.email = this.loginform.value.email;
    this.userModeObj.mobile = this.loginform.value.mobile;
    
    this.formservice.updateuser(this.userModeObj.id, this.userModeObj).subscribe(res => {
      alert("user updated!");
    })
  }

  // redirect to form component
  addusers() {
    this.route.navigate(['/formcompo']);
  }
}

export interface Student {
  id: number,
  fName: string,
  lName:string;
  email: string,
  mobile: number,
  age: number
}