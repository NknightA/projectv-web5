import React, {useEffect} from 'react';
import styles from './Index.module.css';
import { useRouter } from 'next/router'
import IndexMenu from "./Menu";

export default function Index ({query}) {
    const router = useRouter();
    const auth = Number(router.query.auth);
    const Authentication = () => {
        if(auth === 1) {
            return <>welcome!!</>;
        } else if(auth === 2) {
            router.push('/login');
        }
    };
    return (
        <div className={styles.Main}>
            Home
            <div>
                <Authentication/>
                <IndexMenu/>
            </div>
        </div>
    )
};
