import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";
import { API } from "./api";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private _usersApiUrl = `${API}/users`;
  public users$: Observable<User[]>;

  constructor(private readonly _http: HttpClient) {}

  public setUsers(): Observable<User[]> {
    if (this.users$) {
      return this.users$;
    }
    this.users$ = this._http.get<User[]>(this._usersApiUrl);
    return this.users$;
  }

  public getUserById(userId: number): Observable<User> {
    return this.users$.pipe(
      map((users) => users.find((user) => user.id === userId))
    );
  }

  /**
   * @deprecated Since version 1.0. Does not work. Use getUserById instead.
   */
  public getUserByEmail(email: string): Observable<User> {
    // Does not work because commentators mails are not in user db
    return this.users$.pipe(
      map((users) => users.find((user) => user.email === email))
    );
  }
}
