import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationUserGetListDxRequest, User, UserGetId } from '../interfaces/user';
import { DxResponse } from '../interfaces/dx-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // VARIABLES

  // debemos buscarte un mejor lugar..
  private baseApiUrl: string = 'https://node01.linux.internal:5081/api';

  // METODOS HTTP
  
  public getAllDx(request: ApplicationUserGetListDxRequest): Observable<DxResponse> { 
    return this.http.post<DxResponse>(`${this.baseApiUrl}/applicationUser/dxList`, request);
  }

  // soy distinto..
  public getId(applicationUserId: string): Observable<UserGetId> {
    return this.http.get<UserGetId>(`${this.baseApiUrl}/applicationUser/${applicationUserId}`);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseApiUrl}/applicationUser`, user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseApiUrl}/applicationUser`, user);
  }

  public delete(applicationUserId: string) {
    return this.http.delete(`${this.baseApiUrl}/applicationUser/${applicationUserId}`);
  }

}
