import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-dash-board',
  templateUrl: './student-dash-board.component.html',
  styleUrls: ['./student-dash-board.component.css']
})
export class StudentDashBoardComponent implements OnInit {
  studentDetails!:any ;
  studentToUpdate = {
    rollNumber:"",
    name:"",
    address:"",
    percentage:""
  };
  constructor(private studentService: StudentService) { 
    this.getStudentDetails();
  }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){

    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    )
  }
  getStudentDetails(){
    this.studentService.getStudent().subscribe(
      (resp) =>{
        console.log(resp);

        this.studentDetails= resp;
      },
      (err) =>{
        console.log(err);
      }

    );
  }
  deleteStudent(student: any){
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp)=>{
        console.log(resp);
        this.getStudentDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  display = "none";

  edit(student: any){
    this.display = "block";
    console.log(this.display)
    this.studentToUpdate = student;
  }
  updateStudent(){
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);

      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
