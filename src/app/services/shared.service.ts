// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userEmail = new BehaviorSubject<string>('');

  setUserEmail(email: string) {
    this.userEmail.next(email);
  }

  getUserEmail() {
    return this.userEmail.asObservable();
  }
}
