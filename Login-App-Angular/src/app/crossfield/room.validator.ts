import { FormGroup, ValidatorFn } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})

export class RoomOver18Validator
{
    public onlyAccessRoomOver18(minage: number): ValidatorFn
    {
        return (formGroup : FormGroup)=>
        {
            const ageControl = formGroup.get('age');
            const roomControl = formGroup.get('room');

            const ageValue = ageControl.value;
            const roomsValue = roomControl.value;

            console.log(ageValue)
            console.log(roomsValue)

            if(ageValue>=minage)
            {
                return null;
            }

            if(roomsValue==="room-1" || roomsValue==="room-2" || roomsValue==="room-3")
            {
                return {roomOnlyWith18:true}
            }
            return null;
        };
    }
}