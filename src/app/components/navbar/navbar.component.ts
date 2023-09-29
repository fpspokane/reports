import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentPath: string = '/';
  screenWidth: number = window.innerWidth;
  hamburger: boolean = true;

  constructor(private router: Router, private renderer: Renderer2) {
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
  }

  hamburgerSlideIn() {}

  toggleHamburger() {
    this.hamburger = !this.hamburger;
  }
}
