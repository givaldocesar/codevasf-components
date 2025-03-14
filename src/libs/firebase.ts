import { getApps, initializeApp, applicationDefault, App } from "firebase-admin/app";
import { Auth, getAuth, CreateRequest, UpdateRequest, UserRecord } from "firebase-admin/auth";

export default class Firebase {
    private auth: Auth;
    
    constructor(){   
        let app: App;
        const apps = getApps();
        
        if(apps.length === 0){
            app = initializeApp({ 
                credential: applicationDefault(),
                projectId: process.env.PROJECT_ID 
            });
        } else {
           app = apps[0];
        }

        this.auth = getAuth(app);
    }
    
    verifyToken(token: string) : Promise<string>{
        return new Promise((resolve, reject) => {
            this.auth.verifyIdToken(token)
                .then(decodeToken => {
                    resolve(decodeToken.uid);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    createUser(data: CreateRequest) : Promise<object>{
        return new Promise((resolve, reject) => {
            this.auth.createUser(data)
                .then(record => resolve(record.toJSON()))
                .catch(error => reject(error))
        });
    }

    deleteUser(uid: string) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.deleteUser(uid)
                .then(() => resolve(true))
                .catch(error => reject(error))
        });
    }

    deleteUsers(uids: string[]) : Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.auth.deleteUsers(uids)
                .then(() => resolve(true))
                .catch(error => reject(error))
        });
    }

    getUser(uid: string) : Promise<UserRecord>{
        return new Promise((resolve, reject) => {
            this.auth.getUser(uid)
                .then(record => resolve(record))
                .catch(error => reject(error))
        });
    }

    getUserByEmail(email: string) : Promise<UserRecord>{
        return new Promise((resolve, reject) => {
            this.auth.getUserByEmail(email)
                .then(record => resolve(record))
                .catch(error => reject(error))
        });
    }

    getUsers(uids: string[] = []) : Promise<UserRecord[]>{
        return new Promise((resolve, reject) => {
            this.auth.getUsers(uids.map(uid => {return {uid: uid}}))
                .then(results => resolve(results.users))
                .catch(error => reject(error))
        })
    }

    getAllUsers(nextPageToken: string): Promise<UserRecord[]>{
        return new Promise((resolve, reject) => {
            let users: UserRecord[] = [];
            
            this.auth.listUsers(1000, nextPageToken)
                .then(results => {
                    users = users.concat(results.users);
                    
                    if(results.pageToken){
                        this.getAllUsers(results.pageToken)
                            .then((usersList) => users.concat(usersList))
                            .catch(error => reject(error))
                    }

                    resolve(users);
                })
                .catch(error => reject(error))
        });
    }

    updateUser(uid: string, data: UpdateRequest): Promise<UserRecord>{
        return new Promise((resolve, reject) => {
            this.auth.updateUser(uid, data)
                .then(record => resolve(record))
                .catch(error => reject(error))
        });
    }
}