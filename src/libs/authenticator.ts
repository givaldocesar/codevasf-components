import { initializeApp } from "firebase/app";
import {
    confirmPasswordReset,
    getAuth,
    getIdToken,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    verifyPasswordResetCode,
    Auth,
    User,
    UserCredential
} from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN
});

class Authenticator {
    private auth: Auth;

    constructor(){
        this.auth = getAuth(app);
        this.auth.useDeviceLanguage();
    }

    getCurrentUser(): Promise<User | null>{
        return new Promise((resolve, reject) => { 
            onAuthStateChanged(this.auth, async (user) => {
                if(user) resolve(user);
                else resolve(null);
            });
        });
    }

    getCurrentToken() : Promise<string | null>{
        const user = this.auth.currentUser;
      
        return new Promise((resolve, reject) =>{
            if(user){
                getIdToken(user, true)
                    .then(token =>  resolve(token))
                    .catch(error => reject(error));
            }

            resolve(null);
        });
        
    }

    recoveryPassword(code: string, password: string) : Promise<string>{
        return new Promise((resolve, reject) => {
            verifyPasswordResetCode(this.auth, code)
                .then(email => {
                    confirmPasswordReset(this.auth, code, password)
                        .then(response => resolve(email))
                        .catch(error => reject(error))
                })
                .catch(error => reject(error))
        });
    }

    sendRecoverPassword(email:string , authURL: string) : Promise<string>{
        return new Promise((resolve, reject) =>{
            sendPasswordResetEmail(this.auth, email, {
                url: authURL + "?email=" + email
            })
                .then(result => resolve("SUCCESS"))
                .catch(error => reject(error))
        });
    }

    signIn(email: string, password: string): Promise<UserCredential>{
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(this.auth, email, password)
                .then(credentials => resolve(credentials))
                .catch(error => reject(error))
        });
    }

    signOut(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            signOut(this.auth)
                .then(() => resolve(true))
                .catch(error => reject(error))
        });
    }

    translateError(error: any){
        switch(error.code){
            case 'auth/invalid-credential':
                return 'Usuário ou senha inválidos';
            case 'auth/invalid-email':
                return 'Email inválido.';
            case 'auth/missing-password':
                return 'Senha inválida.';
            case 'auth/network-request-failed':
                return 'Sem conexão com a internet.'
            case 'auth/user-disabled':
                return 'Usuário desabilitado.';
            case 'auth/too-many-requests':
                let message = "";    
                message = 'Acesso a conta foi temporariamente suspenso,\n';
                message += 'devido a muitas tentativas de login.\n';
                message += 'É possivel restaurar o acesso imediatamente\n';
                message += 'recuperando sua senha ou você pode tentar novamente mais tarde.'     
                return message;
            default:
                return error.message;
        }
    }

    updatePassword(newPass: string): Promise<boolean>{
        const user = this.auth.currentUser;
        return new Promise((resolve, reject) => {
            if(user){
                updatePassword(user, newPass)
                    .then(() => resolve(true))
                    .catch((error) => reject(error))
            }

            return false;  
        });
    }
}

export default Authenticator;