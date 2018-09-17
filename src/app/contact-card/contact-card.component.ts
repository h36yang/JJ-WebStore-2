import { Component, OnInit, Input } from '@angular/core';

import { faPhoneSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Contact } from '../contact-us/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;

  faPhoneSquare: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.faPhoneSquare = faPhoneSquare;
  }
}
