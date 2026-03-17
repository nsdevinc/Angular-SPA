import { L } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  errorColor:string = "#DC143C"
  warningColor:string = "#E1C16E"
  informationColor:string = "#6082B6"
  successColor:string = "#097969"
  okColor:string = "#FFFFFF"

  private _alertStatus = new BehaviorSubject<string>('Ok');
  private _alertColor = new BehaviorSubject<string>('FFFFFF');
  private _alertMessage = new BehaviorSubject<string>('');


  public readonly getAlertStatus: Observable<string> = this._alertStatus.asObservable();
  public readonly getAlertColor: Observable<string> = this._alertColor.asObservable();
  public readonly getAlertMsg: Observable<string> = this._alertMessage.asObservable();

  constructor () {}

  clearAlert():void{
    console.log('alert-service: clearAlert called.');
    this._alertMessage.next('');
    this._alertColor.next(this.okColor);
    this._alertStatus.next('Ok');
    console.log('alert-service: clearAlert end.');
  }

  setError(message:string,autoClear:boolean){
    console.log('alertService:setError called - '+message);
    this._alertStatus.next('error');
    this._alertColor.next(this.errorColor)
    this._alertMessage.next(message);
    if (autoClear){
      setTimeout(()=>this.clearAlert(),300)
    }
  }

  setWarning(message:string,autoClear:boolean){
    console.log('alertService:setWarning called - '+message);
    this._alertStatus.next('warning');
    this._alertColor.next(this.warningColor)
    this._alertMessage.next(message);
    if (autoClear){
      setTimeout(()=>this.clearAlert(),300)
    }
  }

  setInformation(message:string,autoClear:boolean){
    console.log('alertService:setInformation called - '+message);
    this._alertStatus.next('information');
    this._alertColor.next(this.informationColor)
    this._alertMessage.next(message);
    if (autoClear){
      setTimeout(()=>this.clearAlert(),3000)
    }
  }


  setSuccess(message:string,autoClear:boolean){
    console.log('alertService:setSuccess called - '+message);
    this._alertStatus.next('success');
    this._alertColor.next(this.successColor)
    this._alertMessage.next(message);    
    if (autoClear){
      setTimeout(()=>this.clearAlert(),300)
    }    
  }
}
