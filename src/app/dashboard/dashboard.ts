import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [DatePipe],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly today = new Date();
}
