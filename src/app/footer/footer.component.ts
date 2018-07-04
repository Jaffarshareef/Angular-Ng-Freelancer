import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerLinkGroup1 = ['Freelancer', 'Categories', 'Projects', 'Contets', 'LocalJobs'];
  footerLinkGroup2 = ['Hero', 'About Us', 'How It Works', 'SiteMap'];

  constructor() { }

  ngOnInit() {
  }

}
