import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCoffee = faCoffee;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faChevronRight = faChevronRight;
  constructor() { }

  ngOnInit(): void {
  }

}
