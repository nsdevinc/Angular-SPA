import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title-bar',
  imports: [],
  templateUrl: './title-bar.html',
  styleUrl: './title-bar.scss',
})
export class TitleBar implements OnInit{

  appTitle: string = 'Not set'
  private titleService = inject(Title);

  ngOnInit(): void {
    this.appTitle = this.titleService.getTitle();
  }

}
