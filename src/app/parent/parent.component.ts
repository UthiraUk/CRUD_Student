import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  loginForm!: FormGroup;

  ChildtoParent=[];

  constructor() { 
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      Password: new FormControl('', [Validators.required])

    });

  }
   
  addValue(childvalue: any){
    this.ChildtoParent= childvalue;
    console.log(this.ChildtoParent)

  }
  
  ngOnInit(): void {
    console.log("hiii",this.ChildtoParent)
  }

}
