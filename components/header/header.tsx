import styles from '../../styles/header.module.scss';

function Header() {
    return (
        <header
            className={`${styles.container} w-full fixed pr-10 pl-10 items-center`}
        >
            <div className="flex flex-row items-center h-full items-center">
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className={styles.logo}
                />
            </div>
        </header>
    );
}

export default Header;
