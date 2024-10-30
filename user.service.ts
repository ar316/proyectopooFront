import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<UserDTO | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: UserDTO): void {
    this.userSubject.next(user);
  }

  getUser(): UserDTO | null {
    return this.userSubject.value;
  }
}