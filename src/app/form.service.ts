import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { fildsname } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { }
  jsonserverurl = "http://localhost:3000/users";


  // add student
  adduser(data:any) {
    return this.http.post<any>(this.jsonserverurl,data).pipe(map((res:any) => {
      return res;
    }));
  }

  // get student
  getuser() {
    return this.http.get<any>(this.jsonserverurl).pipe(map((res:any) => {
      return res;
    }))
  }

  // deleter user 
  deleteuser(id:number) {
    return this.http.delete<any>(this.jsonserverurl+"/"+id).pipe(map((res:any) => {
      return res;
    }))
  }
   // get users data by id
  getcurrentdata(id:any) {
    return this.http.get<any>(this.jsonserverurl+"/"+id)
  }

  // update user
  updateuser(id:number, data:any) {
    return this.http.put<any>(this.jsonserverurl + "/" + id,data)
  }



  // http options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-type': 'application/json'
  //   })
  // }

  // // handle api errors
  // hendleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.warn("an error occurres:", error.error.message);
  //   }
  //   else {
  //     console.error(
  //       `backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`
  //     );
  //   }
  //   return throwError(
  //     'somthing bad happened; plese try again latter.'
  //   );
  // };

  // // add user
  // adduser(strudents: any):Observable<fildsname> {
  //   return this.http.post<fildsname>(this.jsonserverurl, JSON.stringify(strudents), this.httpOptions)
  //   .pipe(retry(2),catchError(this.hendleError));
  // }

  // // get user
  // getuser():Observable<fildsname> {
  //   return this.http.get<fildsname>(this.jsonserverurl).pipe(retry(2),catchError(this.hendleError));
  // }
 
  // // get user data by id
  // getitems(id:string):Observable<fildsname> {
  //   return this.http.get<fildsname>(this.jsonserverurl+"/"+id).pipe(retry(2),catchError(this.hendleError))
  // }

  // //update user
  // updateuser(id: any, item:any):Observable<fildsname> {
  //   return this.http.put<fildsname>(this.jsonserverurl + '/' + id, JSON.stringify(item),this.httpOptions).pipe(
  //     retry(2),
  //     catchError(this.hendleError)
  //   )
  // }

  // // delete user
  // deleteuser(id: any) {
  //   return this.http.delete<fildsname>(this.jsonserverurl + "/"+id, this.httpOptions).pipe(
  //     retry(2),
  //     catchError(this.hendleError)
  //   )
  // }
}
