import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setData(login: { email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
