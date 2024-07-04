import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent 
{
  contact: Contact = new Contact();
}
