import React, {useEffect} from "react";
import styles from "./index.module.sass"

export default function Login () {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerForm}>
                <div className={styles.ContainerText}>
                    sigh up
                </div>
                <div className={styles.ContainerFormEmail}>
                    <input type={"email"} className={styles.ContainerFormEmailInput}/>
                </div>
                <div className={styles.ContainerFormPassword}>
                    <input type={"password"} className={styles.ContainerFormPasswordInput}/>
                    <button className={styles.SubmitButton}>Login
                    </button>
                </div>
            </div>
        </div>
    )
}
