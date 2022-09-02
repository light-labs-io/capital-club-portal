import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Capital Club</title>
                <meta
                    name="description"
                    content="Capital Club"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="noindex"/>
            </Head>
            <Header />

            <main className={styles['main']}>
                <div className={`${styles['content-container']} mx-auto sm:px-6 lg:px-8`}>
                    <h1>Welcome to Capital Club</h1>
                    <img src={'/images/placeholder.png'} alt={'placeholder'}/>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Home;
