import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentPath: string = '/';
  screenWidth: number = window.innerWidth;

  constructor(private router: Router) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: string) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
  }
}
