import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers-demo',
  templateUrl: './providers-demo.component.html',
  styleUrls: ['./providers-demo.component.css'],
})
export class ProvidersDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openModal(category: string) {
    const modal = document.getElementById(`modal-${category.toLowerCase()}`);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(category: string) {
    const modal = document.getElementById(`modal-${category.toLowerCase()}`);
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
