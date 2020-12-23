import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1'
  private apiKey = 'AIzaSyCGm0WIHELVtllWTI5DWk2aNq4e1VGz9h0'

  userToken: string;

  // Crea nuevos usuarios
  /*https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] */

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private http: HttpClient
  ) {
    this.leerToken();
  }

  login( usuario: Usuario) {

    const authData = {
      ...usuario,
      returnSecureTocken: true
    }

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map( resp => {
        console.log('entro en el map del rxjs');

        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  logout() {
    localStorage.removeItem('token');
  }

  nuevoUsuario( usuario: Usuario): Observable<any> {

    const authData = {
      ...usuario,
      returnSecureTocken: true
    }

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map( resp => {
        console.log('entro en el map del rxjs');

        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  private guardarToken (idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString())
  }

  leerToken(): string {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date() ) {
      return true;
    }
    else {
      return false;
    }

  }
}
