import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openEsStats() {
    const url1 =
      'https://app.powerbi.com/view?r=eyJrIjoiMzRjMDk5MTktZGZmOC00MWJmLTliZjgtMzE4MTUwNjA4Mzc3IiwidCI6IjJjM2U0MzY5LTAxNjMtNDE5Zi05NGY1LTZlZTdkNTIwZWRkZiJ9';
    window.open(url1, 'name1');
  }

  openAllProjectsStats() {
    const url2 =
      'https://app.powerbi.com/view?r=eyJrIjoiYmJjNGFmNTktYTIzYi00MDU2LTg5OWQtMmE3MGIwMDI1ZDBiIiwidCI6IjJjM2U0MzY5LTAxNjMtNDE5Zi05NGY1LTZlZTdkNTIwZWRkZiJ9';
    window.open(url2, 'name2');
  }

  openFamPromPreventionStats() {
    const url3 =
      'https://app.powerbi.com/view?r=eyJrIjoiNTVhYWI2MjMtOTI5Mi00MWFhLWFkODYtYjhhMDA0ZTBjMTNhIiwidCI6IjJjM2U0MzY5LTAxNjMtNDE5Zi05NGY1LTZlZTdkNTIwZWRkZiJ9';
    window.open(url3, 'name3');
  }
}
