import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { Users } from "./user-model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

export interface authResponseData {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered? : boolean
}

@Injectable({
    providedIn: 'root'
})
export class authenticateService {
    user = new BehaviorSubject<Users>(null);
    loginTimeout : any

    constructor(private http: HttpClient, private router : Router) { }

    signUp(email: string, password: string) {
        return this.http.post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.firebaseApiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(tap(
                resData => {
                    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
                }
            ))
    }

    login(email: string, password: string) {
        return this.http.post<authResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+ environment.firebaseApiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }
        ))
    }

    logout()
    {
        this.user.next(null);
        this.router.navigate(['./auth'])
        localStorage.removeItem('userData')
        if(this.loginTimeout){
            clearTimeout(this.loginTimeout)
        }
        this.loginTimeout = null
    }

    autoLogin(){
        const userData : {email : string, id : string, _token : string, _tokenExpirationDate : Date}
        = JSON.parse( localStorage.getItem('userData'))
        if(!userData){
            return;
        }
        const loggedInUser = new Users(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))

        if(loggedInUser.token)
        {
            this.user.next(loggedInUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration)
        }
    }

    autoLogout(expirationDuration : number){
        this.loginTimeout =setTimeout(() => {
            this.logout()
        }, expirationDuration);
    }

    private handleAuthentication(
        email: string, 
        userid: string, 
        token: string, 
        expiresIn: number) 
        {
        const expiryDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new Users(email, userid, token, expiryDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000)

        localStorage.setItem('userData', JSON.stringify(user))
    }
}