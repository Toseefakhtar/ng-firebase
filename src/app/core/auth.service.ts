import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user.uid));
    //     console.log('user', this.user);
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // });
  }

  login(email: string, password: string): any {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  register(value: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }


  logout(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }


}
