import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit,AfterViewInit {
  toggleDropDown=false;
  
  constructor() { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  
}
