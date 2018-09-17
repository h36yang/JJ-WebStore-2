import { Component, OnInit } from '@angular/core';

import { faExternalLinkAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../data.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  wdName: string;
  wdId: number;
  wdLink: string;
  wdIcon: string;
  contacts: Contact[];
  faExternalLinkAlt: IconDefinition;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.wdName = '微店: 韵逸轩茶业';
    this.wdId = 921187661;
    this.wdLink = `https://weidian.com/?userid=${this.wdId}&wfr=wx_profile`;
    this.wdIcon = '../../assets/img/avatars/shopping-bag-solid.svg';
    this.contacts = this.dataService.getContacts();
    this.faExternalLinkAlt = faExternalLinkAlt;
  }
}
