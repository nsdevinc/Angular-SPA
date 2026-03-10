import { L } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  errorColor:string = "#DC143C"
  warningColor:string = "#FFD700"
  informationColor:string = "#0096FF"
  successColor:string = "#50C878"
  okColor:string = "#FFFFFF"

  private _alertStatus = new BehaviorSubject<string>('Ok');
  private _alertColor = new BehaviorSubject<string>('FFFFFF');
  private _alertMessage = new BehaviorSubject<string>('');


  public readonly getAlertStatus: Observable<string> = this._alertStatus.asObservable();
  public readonly getAlertColor: Observable<string> = this._alertColor.asObservable();
  public readonly getAlertMsg: Observable<string> = this._alertMessage.asObservable();

  constructor () {}

  clearAlert(){
    this._alertMessage.next('');
    this._alertColor.next(this.okColor);
    this._alertStatus.next('Ok')
  }

  setError(message:string){
    console.log('alertService:setError called - '+message);
    this._alertStatus.next('error');
    this._alertColor.next(this.errorColor)
    this._alertMessage.next(message);
  }
}
