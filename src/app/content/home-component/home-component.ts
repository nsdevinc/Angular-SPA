import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarService } from '../../services/nav-bar-service';
import { Spinner } from '../../utilities/spinner/spinner';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule,Spinner],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

  showSpinner:boolean = false;

  constructor(private navService:NavBarService){
    this.navService.setCurrentPage(['Home','Subpage 1','sub page 3']);
  }

  testSpinner(){
    this.showSpinner = true; 
    
  }

  hideSpinner(){
    this.showSpinner = false;
    console.log("Hide spinner")
  }
}
