import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert-service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert-bar',
  imports: [AsyncPipe, MatIconModule],
  templateUrl: './alert-bar.html',
  styleUrl: './alert-bar.scss',
  animations:[
    
  ]
})
export class AlertBar implements OnInit{

  //errorColor:string = "#DC143C"
  //warningColor:string = "#FFD700"
  //informationColor:string = "#0096FF"
  //successColor:string = "#50C878"


  isOk:boolean = true;
  alertColorSub!: Subscription;
  alertColor:string = ''
  alertStatusSub!: Subscription;
  alertStatus:string = '';
  alertMessageSub!: Subscription;
  alertMessage:string = '';

  //alertMessage: string='This is the alert bar'

  constructor(private alertService: AlertService){
    this.alertStatusSub = this.alertService.getAlertStatus.subscribe({
      next:(status)=>{
        this.alertStatus = status;
      }
    });
    this.alertColorSub = this.alertService.getAlertColor.subscribe({
      next:(color)=>{
        this.alertColor = color;
      }
    });
    this.alertMessageSub = this.alertService.getAlertMsg.subscribe({
      next:(msg)=>{
        this.alertMessage = msg;
      }
    });
    //this.alertColor = this.alertService.getAlertColor;
    //this.alertMessage = this.alertService.getAlertMsg;
  }

  ngOnInit(): void {
    
  }

  
  changeColor(alertColor:string):void{
    switch (alertColor){
      case 'error':
        this.alertService.setError('Test error');        
        break;
      case 'warning':
        //this.alertColor = this.warningColor;
        break;
      case 'info':
        //this.alertColor = this.informationColor;
        break;
      case 'success':
        this.alertService.setSuccess('Test success');  
        break;
      case 'clear':
        this.alertService.clearAlert();        
        break;
    }
    console.log('alertBar:end changeColor function')
    
  }
    


}
