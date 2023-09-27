import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  @Input() data!: boolean;
  @Input() toggleHamburger!: Function;

  constructor() {}

  ngOnInit(): void {}
}
