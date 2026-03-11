import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spinner } from '../../utilities/spinner/spinner';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule,Spinner],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

  showSpinner:boolean = false;

  testSpinner(){
    this.showSpinner = true; 
    
  }

  hideSpinner(){
    this.showSpinner = false;
    console.log("Hide spinner")
  }
}
