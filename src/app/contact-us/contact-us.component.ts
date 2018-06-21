import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  wdLink: string;
  contacts: Contact[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.wdLink = "https://weidian.com/?userid=921187661&wfr=wx_profile";
    this.contacts = this.dataService.getContacts();
  }
}
