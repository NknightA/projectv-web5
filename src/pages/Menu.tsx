import styles from './Menu.module.sass';

export default function IndexMenu() {
    return (
        <div>
            <h1>a</h1>
            <div className={styles.Main}>
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
        </div>
    )
}