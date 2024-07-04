import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component
({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.css']
})
export class DynamicFormArrayComponent 
{
  myForm: FormGroup;
  educationList: any = [];

  //FromGroup Controls Validation
  validation_message = 
  {
    first_name: [{ type:'required', message:'First Name is required' }],
    last_name: [{ type:'required', message:'Last Name is required' }],
    email: [{ type:'required', message:'Email is required' }],
    phone_no: [{ type:'required', message:'Phone Number is required' }]
  };

  validation_edumessage =
  {
    schoolName: [{ type:'required', message:'School Name is required' }],
    degree: [{ type:'required', message:'Degree is required' }]
  };
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void
  {
    this.myForm = this.fb.group
    (
      {
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone_no: new FormControl('', [Validators.required]),
      
        educationdata: this.fb.array([]),
      }
    );
  }

  get formControls()
  {
    return this.myForm.controls;
  }

  educationdata() : FormArray
  {
    return this.myForm.get('educationdata') as FormArray;
  }

  neweducationdata() : FormGroup
  {
    return this.fb.group(
      {
        schoolName : new FormControl('', [Validators.required]),
        degree: new FormControl('', [Validators.required]),
        fieldOfStudy: new FormControl(''),
        startDt: new FormControl(''),
        endDt: new FormControl(''),
        grade: new FormControl('')
      }
    );
  }

  educationcon(index)
  {
    this.educationList = this.myForm.get('educationdata') as FormArray;
    const FormGroup = this.educationList.controls[index] as FormGroup;
    return FormGroup;
  }

  addeducationdata()
  {
    this.educationdata().push(this.neweducationdata());
  }

  removeeducationdata(i : number)
  {
    this.educationdata().removeAt(i);
  }

  onSubmit()
  {
    console.log(this.myForm.value)
  }  
}
