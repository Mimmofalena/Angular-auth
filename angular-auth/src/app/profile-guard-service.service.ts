import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuardServiceService {
  constructor() {}
  canActivate(): boolean {
    return true;
  }
}
