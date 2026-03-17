import { Component, OnInit,ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert-service';
import { Observable, of } from 'rxjs';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert-bar',
  imports: [CommonModule, AsyncPipe, MatIconModule],
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
  alertMessage:string='' ;

  //alertMessage: string='This is the alert bar'

  constructor(private alertService: AlertService,private cdRef: ChangeDetectorRef){
    
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
        this.alertService.setError('Test error',false);        
        break;
      case 'warning':
        this.alertService.setWarning('Test warning',false); 
        break;
      case 'information':
        this.alertService.setInformation('Test info',true); 
        break;
      case 'success':
        this.alertService.setSuccess('Test success',true);  
        break;
      case 'clear':
        this.alertService.clearAlert();        
        break;
    }
    setTimeout(() => {
      //this.data = 'Updated Data After Async Call';
      // Without the line below, the view would not update because of OnPush strategy
      this.cdRef.detectChanges(); // Manually trigger change detection
    }, 3000);
    console.log('alertBar:end changeColor function')
    
  }
    


}
