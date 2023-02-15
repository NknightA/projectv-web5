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
        <div >
            Home
            <div className={styles.Container}>
                <Authentication/>
                <IndexMenu/>
                
            </div>
            <Sidebar/>
        </div>
    )
};

function Sidebar () {
    return (
        <div className={styles.Sidebar}>
            <h2>List</h2>
                <li>
                    <ul>a</ul>
                </li>
                <li>aa
                    <ul>a</ul>
                </li>
        </div>
    )
}