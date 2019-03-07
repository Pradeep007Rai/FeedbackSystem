import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentDetail } from '../../student.model';


const ELEMENT_DATA: StudentDetail[] = [
  {rollNo: 1, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 2, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 3, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 4, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 5, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 6, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 7, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 8, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 9, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 10, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 11, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 12, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 13, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"}
];

@Component({
  selector: 'app-student-list-table',
  templateUrl: './student-list-table.component.html',
  styleUrls: ['./student-list-table.component.css']
})
export class StudentListTableComponent implements OnInit {

  displayedColumns: string[] = ['rollno', 'name', 'class','edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}


// STUDENT_ID INT PRIMARY KEY ,
// 	CLASS_ID INT ,
// 	STUDENT_NAME VARCHAR(20) ,
// 	GENDER VARCHAR(6) ,
// 	DOB DATE ,
// 	ADDRESS VARCHAR(100) ,
// 	CONTACT VARCHAR(12) ,
// 	IS_ACTIVE INT(1) ,