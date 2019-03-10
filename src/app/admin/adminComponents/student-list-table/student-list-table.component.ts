import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { StudentDetail } from '../../models/student.model';
import { ClassDetail } from '../../models/class.model.';


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
  selectedClass:ClassDetail = null;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource._filter._value);
    if(!this.dataSource._filter._value)
      this.dontSave();
    else
      this.selected(this.dataSource._renderData._value[0]);
  }

  selectClass(){
    this.selectedClass = { id: 1 ,name: 'TYBSc'};
  }

  unselectClass(){
    this.selectedClass = null;
  }

  selected(selectedStudent){
    this.name = selectedStudent.name;
    this.rollNo = selectedStudent.rollNo;
    this.dob = selectedStudent.dob;
    this.className = selectedStudent.class.name;
    this.gender = selectedStudent.gender;
    this.address = selectedStudent.address;
    this.contactNo = selectedStudent.contactNo;
    this.selectedStudent = selectedStudent;

    console.log("You selected  student with id " +selectedStudent.rollNo +"whose detai are as follow \n"+ JSON.stringify(selectedStudent));
  }

  save(){
    this.selectedStudent.name = this.name;
    this.selectedStudent.rollNo = this.rollNo;
    this.selectedStudent.dob = this.dob;
    this.selectedStudent.class.name = this.className;
    this.selectedStudent.gender = this.gender;
    this.selectedStudent.address = this.address
    this.selectedStudent.contactNo = this.contactNo;
    this.openSnackBar('Updating Student Record .... ',6000);
    console.log("You are trying to save student with id " +this.selectedStudent.rollNo +"whose detai are as follow \n"+ JSON.stringify(this.selectedStudent));    
    setTimeout(()=>{ this.openSnackBar('Record Updated',2000) }, 5000);
    this.name = null;
  }

  dontSave(){
    this.name = null;
    this.openSnackBar('Record Not Updated',3000);
  }

  delete(){
    console.log("You are trying to delete student with id " +this.selectedStudent.rollNo +"whose detai are as follow \n"+ JSON.stringify(this.selectedStudent));
    
    this.openSnackBar('Deleting Student Record .... ',6000);
  }
  
  openSnackBar(message: string, time: number) {
    this.snackBar.open(message, '', {
      duration: time,
    });
  }

  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.ELEMENT_DATA  = [
      {rollNo: 1, name: 'Pradeep Kumar Rai', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 2, name: 'Junaid Rafik Shaikh', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 3, name: 'Raghuvir Sigh Rathore', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 4, name: 'Ranjit Kumar Roy', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 5, name: 'Subhashini Roy', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 6, name: 'Daizy Kumari', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 7, name: 'Trishla Kamra', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 8, name: 'Shreyas', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 9, name: 'Praveen Kumar Rai', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 10, name: 'Umesh Shinde', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 11, name: 'Sayali Shinde', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 12, name: 'Pradeep', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"},
      {rollNo: 13, name: 'Pradeep', class:{ id: 1 ,  name: 'TYBSc'}, gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad"}
    ];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

}
