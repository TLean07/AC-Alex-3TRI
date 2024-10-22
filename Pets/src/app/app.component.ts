import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  onSegmentChange(event: any) {
    const selectedPage = event.detail.value;
    if (selectedPage === 'pets') {
      this.router.navigate(['/pets']);
    } else if (selectedPage === 'cuidadores') {
      this.router.navigate(['/cuidadores']);
    }
  }
}
