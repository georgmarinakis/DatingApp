import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {} // empty object, it will be filled with anything





  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
  }

}
