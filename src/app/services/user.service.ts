import { Injectable } from '@angular/core';
import { ILogin, IUser } from '../core/models/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(data: ILogin): Observable<boolean> {
    return this.getUsers().pipe(
      map((userData: IUser[]) => {
        const user = userData.find(
          (user: ILogin) =>
            user.username === data.username && user.password === data.password
        );

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        } else return false;
      })
    );
  }

  validateUser(data: IUser): Observable<boolean> {
    return this.getUsers().pipe(
      map((userData: IUser[]) => {
        const user = userData.find(
          (user: ILogin) =>
            user.username === data.username && user.password === data.password
        );
        return user ? true : false;
      })
    );
  }

  existUser(): IUser {
    const response = localStorage.getItem('user') as string;
    const user = JSON.parse(response);

    return user;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/users`).pipe(
      map((response) => {
        return response;
      })
    );
  }

  register(data: ILogin): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/users`, data);
  }

  logout() {
    window.localStorage.clear();
  }

  getPokemons(): Observable<any> {
    return this.http.get(`http://localhost:3000/pokemons`);
  }

  registerPokemon(body: any): Observable<any> {
    return this.getPokemons().pipe(
      switchMap((pokemons: any[]) => {
        const data = { ...body, id: pokemons.length + 1 };
        return this.http.post(`http://localhost:3000/pokemons`, data);
      })
    );
  }

  getMyPokemons(id: number) {
    return this.http.get(`http://localhost:3000/pokemons`).pipe(
      map((response) => response),
      map((response: any) => {
        return response.filter((data: any) => data.user_id === id);
      })
    );
  }

  sigIn() {
    // localStorage.setItem('user);
  }
}
