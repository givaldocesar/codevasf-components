import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { User as FirebaseUser } from "firebase/auth";
import { FormButton, FormInput, FormPassword } from "../form";
import { Authenticator } from "../../libs";
import styles from "./Login.module.scss";
import classNames from "classnames";

export type User = {
    userID: string;
    displayName?: string;
    token: string;
    email: string;
    email_verified: boolean;
}

export default function Login({
    className="",
    title,
    authenticator,
    validateUser
}: {
    className?: string;
    title?: React.ReactNode,
    authenticator: Authenticator,
    validateUser: (user: FirebaseUser | null, path?: string) => Promise<[User | null, string | null]>;
}){
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string>();
    const path = usePathname();
    
    async function login(evt: React.FormEvent<HTMLFormElement>){
        evt.preventDefault();
        evt.stopPropagation();
        setLoading(true);
        setStatus(undefined);

        try{
            const data =  new FormData(evt.target as HTMLFormElement);
            const credentials = await authenticator.signIn(data.get('username') as string, data.get('password') as string); 
            const [user, error] = await validateUser(credentials.user, path);     
            
            if(error){
                setStatus(error);
            } else {
                evt.target.dispatchEvent(new CustomEvent<User | null>('login-successful', {
                    bubbles: true,
                    detail: user
                }));
            }
        } catch(error) {
            setStatus(authenticator.translateError(error));
        }
       
        setLoading(false);
    }

    return (
        <form className={`${styles.form} ${className}`} onSubmit={login}>
            {title}
            <FormInput 
                className={styles.user} 
                name="username" 
                placeholder="USUÁRIO" 
                autoComplete="username"
            />
            <FormPassword placeholder="SENHA" />
            <FormButton 
                type="submit"
                disabled={loading}
                className={classNames({
                    [styles.button]: true,
                    [styles.loading]: loading
                })}
            >
                ENTRAR
            </FormButton>
            <span className={styles.status}>{status}</span>
        </form>
    );
}