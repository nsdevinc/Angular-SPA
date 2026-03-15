import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {

  //Private variables to hold state
  private _currentPage = new BehaviorSubject<string[]>([]);

  //Functions that just return data
  public readonly getCurrentPage: Observable<string[]> = this._currentPage.asObservable();

  //Constructor will eventually contact the API to get role information from the user session
  //Will likely use jwt and hashed values for security/verify user and roles
  constructor () {}


  setCurrentPage(page:string[]){
    console.log('navBarService:setCurrentPage called - '+page.toString());
    this._currentPage.next(page);
    
  }
}
