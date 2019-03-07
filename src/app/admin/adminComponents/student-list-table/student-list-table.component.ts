import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentDetail } from '../../student.model';


const ELEMENT_DATA: StudentDetail[] = [
  {rollNo: 1, name: 'Pradeep Kumar Rai', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 2, name: 'Junaid Rafik Shaikh', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 3, name: 'Raghuvir Sigh Rathore', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 4, name: 'Ranjit Kumar Roy', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 5, name: 'Subhashini Roy', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 6, name: 'Daizy Kumari', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 7, name: 'Trishla Kamra', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 8, name: 'Shreyas', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 9, name: 'Praveen Kumar Rai', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 10, name: 'Umesh Shinde', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
  {rollNo: 11, name: 'Sayali Shinde', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
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
