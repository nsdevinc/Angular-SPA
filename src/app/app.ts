import { Component, signal } from '@angular/core';
import { StatusBar } from './pageLayout/status-bar/status-bar';
import { TitleBar } from './pageLayout/title-bar/title-bar';
import { NavBar } from './pageLayout/nav-bar/nav-bar';
import { FooterBar } from './pageLayout/footer-bar/footer-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StatusBar,TitleBar,NavBar,FooterBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-SPA');
}
