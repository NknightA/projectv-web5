import styles from './Menu.module.sass';

export default function IndexMenu() {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>For all Web3 and Web5 developers!!!</h1>
            </div>
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
                <h2>Software lists</h2>
                <div>
                    <div>
                        <a href="/sources/packages/">Packages</a>
                    </div>
                    <div>
                        <a href="/sources">Sources</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}