import { Component, OnInit } from '@angular/core';
import { StudentDetail } from '../../models/student.model';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { TeacherDetail } from '../../models/teachers.model';
import { ClassDetail } from '../../models/class.model.';
import { Subject } from 'rxjs';
import { SubjectDeatil } from '../../models/subject.model.';

@Component({
  selector: 'app-teachers-list-table',
  templateUrl: './teachers-list-table.component.html',
  styleUrls: ['./teachers-list-table.component.css']
})
export class TeachersListTableComponent implements OnInit {
  ELEMENT_DATA: TeacherDetail[];
  displayedColumns: string[] = ['id', 'name', 'contact', 'edit'];
  selectedTeacher: TeacherDetail;
  subject: SubjectDeatil[];
  dataSource: any;
  subjectdataSource: any;
  name: string = null;
  id: number = null;
  dob: Date = null;
  className: string = null;
  contactNo: string = null;
  gender: string = null;
  address: string = null;
  disableAddSubject = false;
  newSubject:SubjectDeatil;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource._filter._value);
    if (!this.dataSource._filter._value)
      this.dontSave();
    else
      this.selected(this.dataSource._renderData._value[0]);
  }

  selected(selectedTeacher) {
    this.name = selectedTeacher.name;
    this.id = selectedTeacher.id;
    this.dob = selectedTeacher.dob;
    this.gender = selectedTeacher.gender;
    this.address = selectedTeacher.address;
    this.contactNo = selectedTeacher.contactNo;
    this.selectedTeacher = selectedTeacher;
  }

  addSubject(){
    this.newSubject = {id: null,name:"",class : { id: this.selectedTeacher.id,name: ''}};
    this.disableAddSubject = true;
  }

  saveSubject(element){
    this.disableAddSubject = false;
    this.subject.push(this.newSubject);
    this.subjectdataSource = new MatTableDataSource(this.subject);
  }

  save() {
    this.selectedTeacher.name = this.name;
    this.selectedTeacher.id = this.id;
    this.selectedTeacher.dob = this.dob;
    this.selectedTeacher.gender = this.gender;
    this.selectedTeacher.address = this.address
    this.selectedTeacher.contactNo = this.contactNo;
    this.dontSave();
    setTimeout(() => { this.openSnackBar('Record Updated', 2000) }, 5000);
  }

  dontSave() {
    this.name = null;
    this.id = null;
    this.dob = null;
    this.className = null;
    this.gender = null;
    this.address = null;
    this.contactNo = null;
    this.selectedTeacher = null;
  }

  openSnackBar(message: string, time: number) {
    this.snackBar.open(message, '', {
      duration: time,
    });
  }


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      { id: 1, name: 'Pradeep Kumar Rai', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 2, name: 'Junaid Rafik Shaikh', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 3, name: 'Raghuvir Sigh Rathore', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 4, name: 'Ranjit Kumar Roy', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 5, name: 'Subhashini Roy', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 6, name: 'Daizy Kumari', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 7, name: 'Trishla Kamra', gender: 'female', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 8, name: 'Shreyas', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 9, name: 'Praveen Kumar Rai', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 10, name: 'Umesh Shinde', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 11, name: 'Sayali Shinde', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 12, name: 'Pradeep', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" },
      { id: 13, name: 'Pradeep', gender: 'male', dob: new Date('10-10-2019'), contactNo: '7350397789', address: "Chinchwad" }
    ];
    this.subject = [
    { id: 1, name: 'Electronics' , class : { id: 1, name: 'TYBSc'} },
    { id: 2, name: 'Statistics', class : { id: 1, name: 'TYBSc'} },
    { id: 3, name: 'Algebra' ,class : { id: 1, name: 'TYBSc'} },
    { id: 4, name: 'Algebra',class : { id: 1, name: 'TYBSc'} },
    { id: 5, name: 'Algebra',class : { id: 1, name: 'TYBSc'} },
    { id: 6, name: 'Algebra' ,class : { id: 1, name: 'TYBSc'}}];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.subjectdataSource = new MatTableDataSource(this.subject);
  }

}
