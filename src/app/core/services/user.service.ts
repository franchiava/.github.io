import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/enviroments.prod";
import { user } from "../interfaces/interfaces";

@Injectable({
    providedIn: 'root'
  })
  
  export class UserService {
    private _users$ = new BehaviorSubject<user[]>([]);
    private users$ = this._users$.asObservable();


    constructor(private httpClient: HttpClient) {}

    loadUsers():void {
      this.httpClient.get<user[]>(environment.baseApiUrl + '/User').subscribe({
        next: (value) => this._users$.next(value)
      })
    }

    getUsers(): Observable<user[]> {
      return this._users$.asObservable()
    }
  }