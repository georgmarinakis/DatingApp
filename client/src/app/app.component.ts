import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // If someone wants to refer on me, as a Component, they use this element
  templateUrl: './app.component.html', // I, as a Component, project my data in this html file
  styleUrls: ['./app.component.css'] // I style my html file using this css file
})
export class AppComponent implements OnInit { // OnInit: interface in order to initialize data-bound properties, after constructor
  title = 'The Dating app';
  users: any; // users can be any type of TS

  constructor(private http: HttpClient){} // HttpClient: performs HTTP request

  ngOnInit() {
    this.getUsers();
  }

  // από πού θα πάρω data
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => { // subscribe: async
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}

   