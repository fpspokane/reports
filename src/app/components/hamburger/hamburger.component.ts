import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  @Input() hamburger!: boolean;
  @Input() toggleHamburger!: Function;
  @Input() hideHamburger!: Function;

  constructor() {}

  ngOnInit(): void {}
}
