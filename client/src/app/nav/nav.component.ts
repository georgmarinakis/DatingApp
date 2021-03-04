import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model: any = {} // empty object called model, it will be filled with anything
  loggedIn: boolean;

  // Inject Service
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  // Make a post. Use the method accountService.login()
  login() { 
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }
}

