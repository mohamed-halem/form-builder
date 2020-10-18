import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angula-form-builder';
  formbuilder : FormGroup;
  newForm : FormGroup;
  fieldsForm = [];
  selectLan = 'eng';
  show:boolean = false;
  @ViewChild('formNameEdit' ,{static: false}) formNameEdit:ElementRef;

  ngOnInit(){
  this.formbuilder = new FormGroup({
    'formName': new FormControl(null, Validators.required),
    'namelabel' : new FormArray([new FormControl(null, Validators.required)]),
    'type' : new FormArray([new FormControl(null, Validators.required)]),
  })

  this.newForm = new FormGroup({
  
  })
  }

  ngsubmit(){
    this.fieldsForm.push(this.formbuilder.value);
    this.formbuilder.reset();
    this.show = false;
  }

  checkformname(value){
   for (let i = 0; i < this.fieldsForm.length; i++) {
    if ( value === this.fieldsForm[i]['formName'] ){
      this.show = true;
      this.formbuilder.get('formName').reset();
      }
   }

  }

  newlabel() {
    (<FormArray>this.formbuilder.get('namelabel')).push(new FormControl(null, Validators.required));
    (<FormArray>this.formbuilder.get('type')).push(new FormControl(null, Validators.required));
  }

 
  chooselang(value){
    this.selectLan = value;
    this.formbuilder.reset();
  }
}
