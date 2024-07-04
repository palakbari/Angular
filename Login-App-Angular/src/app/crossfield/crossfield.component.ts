import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Room } from './room.interface';
import { RoomOver18Validator } from './room.validator';


@Component({
  selector: 'app-crossfield',
  templateUrl: './crossfield.component.html',
  styleUrls: ['./crossfield.component.css']
})
export class CrossfieldComponent 
{
  profileform : FormGroup;

  rooms: Room[]=[
    {text:'room 1', value:'room-1'},
    {text:'room 2', value:'room-2'},
    {text:'room 3', value:'room-3'},
  ]

  constructor(private fromBuilder: FormBuilder, private roomOver18Validator : RoomOver18Validator){}

  ngOnInit()
  {
    this.profileform = this.fromBuilder.group
    (
      {
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        room:[{},Validators.required],
        age:['',[Validators.required,NoNegativeNumbers]],
      },
      {
        validators: [this.roomOver18Validator.onlyAccessRoomOver18(18)],
        updateOn: 'blur',
      }
    );
  }
}
export function NoNegativeNumbers(control:AbstractControl)
{
  return control.value<0?{negativeNumber:true}:null
}

