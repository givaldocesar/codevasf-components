import { CreateRequest, UserRecord, UpdateRequest } from 'firebase-admin/auth';

declare class Firebase {
    private auth;
    constructor();
    verifyToken(token: string): Promise<string>;
    createUser(data: CreateRequest): Promise<object>;
    deleteUser(uid: string): Promise<boolean>;
    deleteUsers(uids: string[]): Promise<boolean>;
    getUser(uid: string): Promise<UserRecord>;
    getUserByEmail(email: string): Promise<UserRecord>;
    getUsers(uids?: string[]): Promise<UserRecord[]>;
    getAllUsers(nextPageToken: string): Promise<UserRecord[]>;
    updateUser(uid: string, data: UpdateRequest): Promise<UserRecord>;
}

export { Firebase as default };
