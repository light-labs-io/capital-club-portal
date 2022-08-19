import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Checklist from '../components/accordion/accordion';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Capital CLub</title>
                <meta
                    name="description"
                    content="Capital Club"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className={styles['main']}>
                {/*<div className={`absolute w-full ${styles['top-box']}`}></div>*/}
                <div className={`${styles['content-container']} mx-auto sm:px-6 lg:px-8`}>
                    <h1>Welcome to Capital Club,<br/>Steve!</h1>
                    <h3>Let's get started!</h3>
                    <img src={'/images/placeholder.png'} alt={'placeholder'}/>
                    <div className={`${styles['content']} pt-5 flex flex-col`}>
                        <h2>Getting started checklist</h2>
                        <p className={'pt-5'}>Here are some quick steps to get you started on your journey.</p>
                    </div>
                    <Checklist/>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Home;
