import styles from './Menu.module.sass';

export default function IndexMenu() {
    return (
        <div className={styles.Main}>
            <div>
                <h1>Welcome to projectV!!</h1>
            </div>
            <div className={styles.About}>
                <h2>about projectV?</h2>
                <div>
                    <div>
                        <a href="/about">test link1</a>
                    </div>
                    <div>
                        <a href="/about">test link1</a>
                    </div>
                </div>
            </div>
            <div className={styles.Lsits}>
                <h2>Package lists</h2>
                <div>
                    <div>
                        <a href="/about">test link1</a>
                    </div>
                    <div>
                        <a href="/about">test link1</a>
                    </div>
                </div>
            </div>
        </div>
    )
}