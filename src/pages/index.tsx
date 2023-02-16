import React, {useEffect} from 'react';
import styles from './Index.module.sass';
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
            <div className={styles.Main}>
                <Sidebar/>
                <Main/>
                <SidebarRight/>
            </div>
        </div>
    )
};

function Sidebar () {
    return (
        <div className={styles.Sidebar}>
            <h2>List</h2>
                <li>
                    <ul><h2>Updates</h2>
                        <li>a</li>
                        <li>Test 1.2</li>
                        <li>Test 1.3</li>
                    </ul>
                </li>
                <li>
                    <ul>Test 2
                        <li>Test 2.1</li>
                        <li>Test 2.2</li>
                        <li>Test 2.3</li>
                    </ul>
                </li>
        </div>
    )
}

function Main () {
    return (
        <div className={styles.Mainaera}>
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

function SidebarRight () {
    return (
        <div className={styles.SidebarRight}>
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