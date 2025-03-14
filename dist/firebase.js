import { getApps, initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

class Firebase {
    auth;
    constructor() {
        let app;
        const apps = getApps();
        if (apps.length === 0) {
            app = initializeApp({
                credential: applicationDefault(),
                projectId: process.env.PROJECT_ID
            });
        }
        else {
            app = apps[0];
        }
        this.auth = getAuth(app);
    }
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            this.auth.verifyIdToken(token)
                .then(decodeToken => {
                resolve(decodeToken.uid);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    createUser(data) {
        return new Promise((resolve, reject) => {
            this.auth.createUser(data)
                .then(record => resolve(record.toJSON()))
                .catch(error => reject(error));
        });
    }
    deleteUser(uid) {
        return new Promise((resolve, reject) => {
            this.auth.deleteUser(uid)
                .then(() => resolve(true))
                .catch(error => reject(error));
        });
    }
    deleteUsers(uids) {
        return new Promise((resolve, reject) => {
            this.auth.deleteUsers(uids)
                .then(() => resolve(true))
                .catch(error => reject(error));
        });
    }
    getUser(uid) {
        return new Promise((resolve, reject) => {
            this.auth.getUser(uid)
                .then(record => resolve(record))
                .catch(error => reject(error));
        });
    }
    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            this.auth.getUserByEmail(email)
                .then(record => resolve(record))
                .catch(error => reject(error));
        });
    }
    getUsers(uids = []) {
        return new Promise((resolve, reject) => {
            this.auth.getUsers(uids.map(uid => { return { uid: uid }; }))
                .then(results => resolve(results.users))
                .catch(error => reject(error));
        });
    }
    getAllUsers(nextPageToken) {
        return new Promise((resolve, reject) => {
            let users = [];
            this.auth.listUsers(1000, nextPageToken)
                .then(results => {
                users = users.concat(results.users);
                if (results.pageToken) {
                    this.getAllUsers(results.pageToken)
                        .then((usersList) => users.concat(usersList))
                        .catch(error => reject(error));
                }
                resolve(users);
            })
                .catch(error => reject(error));
        });
    }
    updateUser(uid, data) {
        return new Promise((resolve, reject) => {
            this.auth.updateUser(uid, data)
                .then(record => resolve(record))
                .catch(error => reject(error));
        });
    }
}

export { Firebase as default };
//# sourceMappingURL=firebase.js.map
