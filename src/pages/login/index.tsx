import {useState} from "react";
import {useRouter} from "next/router";
import styles from "./index.module.sass";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // ユーザー名とパスワードを検証する処理をここに追加する
        // 例えば、ユーザー名が "example" で、パスワードが "password" の場合にログインが成功したとする

        if (username === "example" && password === "password") {
            // ログインが成功した場合は、ユーザーページに遷移する
            router.push("/user/[user]/", `/user/${username}/`);
        }
    };

    return (
        <div>
            <div className={styles.ContainerInnerForm}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.ContainerInnerFormInput}
                /></div>
            <div className={styles.ContainerInnerForm}>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.ContainerInnerFormInput}
                />
                <br/>
                <button onClick={handleLogin}>ログイン</button>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerInner}>
                <LoginPage/>
            </div>
        </div>
    );
}

