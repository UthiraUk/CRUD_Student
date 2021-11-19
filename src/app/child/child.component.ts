import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
  @Input()
  parentData!: FormGroup;  

  @Output() ValuePassParent = new EventEmitter();


  


  constructor() { }

  ngOnInit(): void {
  }
  TransferData(value: any){

    this.ValuePassParent.emit(value);
    console.log("hhhhhh",value);
    }

    

}
