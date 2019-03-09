import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { StudentDetail } from '../../student.model';


@Component({
  selector: 'app-student-list-table',
  templateUrl: './student-list-table.component.html',
  styleUrls: ['./student-list-table.component.css']
})
export class StudentListTableComponent implements OnInit {
  ELEMENT_DATA: StudentDetail[];
  displayedColumns: string[] = ['rollno', 'name', 'class','edit'];
  selectedStudent:StudentDetail;
  dataSource: any;
  name: string = null;
  rollNo: number = null;
  dob: Date = null;
  className: string = null; 
  contactNo: string = null;
  gender: string = null;
  address: string = null;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource._filter._value);
    if(!this.dataSource._filter._value)
      this.dontSave();
    else
      this.selected(this.dataSource._renderData._value[0]);
  }

  selected(selectedStudent){
    this.name = selectedStudent.name;
    this.rollNo = selectedStudent.rollNo;
    this.dob = selectedStudent.dob;
    this.className = selectedStudent.class;
    this.gender = selectedStudent.gender;
    this.address = selectedStudent.address;
    this.contactNo = selectedStudent.contactNo;
    this.selectedStudent = selectedStudent;
  }

  save(){
    this.selectedStudent.name = this.name;
    this.selectedStudent.rollNo = this.rollNo;
    this.selectedStudent.dob = this.dob;
    this.selectedStudent.class = this.className;
    this.selectedStudent.gender = this.gender;
    this.selectedStudent.address = this.address
    this.selectedStudent.contactNo = this.contactNo;
    this.dontSave();
    setTimeout(()=>{ this.openSnackBar('Record Updated',2000) }, 5000);
  }

  dontSave(){
    this.name = null;
    this.rollNo = null;
    this.dob = null;
    this.className = null;
    this.gender = null;
    this.address = null;
    this.contactNo = null;
    this.selectedStudent = null;
  }
  
  openSnackBar(message: string, time: number) {
    this.snackBar.open(message, '', {
      duration: time,
    });
  }

  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.ELEMENT_DATA  = [
      {rollNo: 1, name: 'Pradeep Kumar Rai', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 2, name: 'Junaid Rafik Shaikh', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 3, name: 'Raghuvir Sigh Rathore', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 4, name: 'Ranjit Kumar Roy', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 5, name: 'Subhashini Roy', class: 'TYBSc', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 6, name: 'Daizy Kumari', class: 'TYBSc', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 7, name: 'Trishla Kamra', class: 'TYBSc', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 8, name: 'Shreyas', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 9, name: 'Praveen Kumar Rai', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 10, name: 'Umesh Shinde', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 11, name: 'Sayali Shinde', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 12, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 13, name: 'Pradeep', class: 'TYBSc', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"}
    ];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

}
