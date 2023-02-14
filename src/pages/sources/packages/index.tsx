import React from "react";
import {useRouter} from "next/router";
import styles from "../../Index.module.css";

export default function Index ({query}) {
    const dammyname = 'test';
    const router = useRouter();
    const tab = router.query.tab;
    const connectorName = router.query.connectorName;
    const connectorStatus = router.query.connectorStatus;
    const Tabs = () => {
        if(tab === 'about') {
            return <>welcome!!</>;
        }
    };
    return (
        <div className={styles.Main}>
            <h1>{dammyname}</h1>
            <div>
                a
                <Tabs/>
                {connectorName},{connectorStatus}
            </div>
        </div>
    )
};
