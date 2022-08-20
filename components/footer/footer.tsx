import dayjs from 'dayjs';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/footer.module.scss';

function Footer() {
    const [year, setYear] = useState<string>(dayjs().format('YYYY'));

    return (
        <footer className={`${styles['footer']} w-full bottom-0 flex justify-center items-center bg-black`}>
            <div
                className={`flex flex-col gap-5 items-center ${styles.container}`}
            >
                <img
                    src="/images/logo-footer.png"
                    alt="logo"
                    className={styles.logo}
                />
                <div
                    className={`${styles['copyright-container']} flex flex-row justify-center items-center gap-5`}
                >
                    <p className="text-white">Copyright Capital Club {year}</p>
                    <Link href="https://lightlabs.io/">
                        <a className="text-white" target="_blank">
                            Powered By LightLabs
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
