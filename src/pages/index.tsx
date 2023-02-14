import React, {useEffect} from 'react';
//import styled from "styled-components";
import styles from './Index.module.css';
import { useRouter } from 'next/router'
import getAppRouteFromEntrypoint from "next/dist/server/get-app-route-from-entrypoint";

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
            </div>
        </div>
    )
};
