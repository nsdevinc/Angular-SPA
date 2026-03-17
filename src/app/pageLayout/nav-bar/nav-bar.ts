import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar-service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  currentPage:string = ''
  currentPageSub!: Subscription;

  constructor(private navBarService:NavBarService){
    this.currentPageSub = this.navBarService.getCurrentPage.subscribe({
      next:(curPage)=>{
        //console.log('nav-bar constructor - curPage: '+curPage.toString());
        //console.log('nav-bar constructor - curPage length: '+curPage.length)
        if (curPage.length == 1){
          this.currentPage = curPage[0];
          return;
        }else{
          let tempPage = curPage[0];
          let tempStr = '';
          for(let i=1;i<=curPage.length-1;i++){
            //console.log('nav-bar constructor: '+curPage[i]);
            tempStr = tempStr + " -> "+curPage[i]
          }
          //console.log('nab-bar constructor: '+tempStr);
          tempPage = tempPage+tempStr;
          this.currentPage = tempPage;
          return;
        }
        //this.currentPage = "Error in nav bar current page"
      }
    });
  }
}
