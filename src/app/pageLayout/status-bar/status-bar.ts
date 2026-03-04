import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-status-bar',
  imports: [DatePipe],
  templateUrl: './status-bar.html',
  styleUrl: './status-bar.scss',
})
export class StatusBar {

  today:Date = new Date()
}
