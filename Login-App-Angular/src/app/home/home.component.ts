import { Component, Injector } from '@angular/core';
import { ConsoleLogger } from '../services/logger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  logger: ConsoleLogger = new ConsoleLogger();

  constructor(private router : Router, _injector : Injector)
  {
    this.logger = _injector.get("1");
    this.logger.log()
  }

  load()
  {
    this.router.navigate(['customer']);
  }

}
