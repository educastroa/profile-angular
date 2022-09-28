import { Component, OnInit } from '@angular/core';
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBars = faBars;
  faClose = faClose;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
