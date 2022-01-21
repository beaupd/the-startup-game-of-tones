import Head from "next/head";
import styles from "../styles/RecordingsPage.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { getSanityContent } from "./api/sanity";

const recordingsPage = (props) => {
    const { data: session, status } = useSession();
    const { recordings } = props;

    if (!session) {
        return (
            <section className="flex items-center justify-center w-full h-full absolute left-0 top-0 flex-col">
                <h1 className="p-10">Unauthorized</h1>
                <Link href="/login">
                    <a className="px-5 py-2 bg-black text-white rounded uppercase">
                        login
                    </a>
                </Link>
            </section>
        );
    }

    console.log(recordings);
    return (
        <>
            <div className="background-imageIntro" id="bgImage"></div>

            <nav className={styles.topBar}>
                <div className={styles.circleIcon}>
                    <img src={"./music-note2.svg"} alt="music-note"></img>
                </div>

                <div className={styles.circleIcon}>
                    {" "}
                    <img src={"./profile.svg"} alt="profile"></img>
                </div>
            </nav>

            <aside className={styles.sideBar}>
                <a href="/#">
                    <img
                        className={styles.sideBarItem}
                        src={"./menu-button.svg"}
                        alt="menu-button"
                    ></img>
                </a>
                <p>Menu</p>

                <h2 className={styles.sideBarItem1}>My Recordings</h2>
            </aside>

            <main className={styles.main}>
                <a href="#" className={styles.backContainer}>
                    <img src={"/arrow-left.svg"} alt="arrow left"></img>
                    <p>Back</p>
                </a>

                <header>
                    <h1 className={styles.chapterHeader}>My Recordings</h1>
                </header>

                <section className={styles.recording}>
                    <div className={styles.recordingGridItem1}>
                        Chapter 1.1 <br />{" "}
                        <span className={styles.spanItem}>Exercise 1</span>
                    </div>
                    <div className={styles.recordingGridItem2}>
                        <img
                            className={styles.recordingSVG}
                            src={"/play-button.svg"}
                            alt="play button"
                        ></img>
                    </div>

                    <div className={styles.recordingGridItem3}>
                        <img
                            className={styles.recordingSVG}
                            src={"/trash-can.svg"}
                            alt="trashcan"
                        ></img>
                    </div>
                    <div className={styles.recordingGridItem}></div>
                    <div className={styles.recordingGridItem4}>
                        Go to exercise
                    </div>
                </section>
            </main>
        </>
    );
};

export async function getStaticProps(context) {
    // const recordings = await getSanityContent({
    //     query: `
    //     query {
    //         allUser{
    //             _id
    //           }
    //       }`,
    // });

    const recordings = await getSanityContent({
        query: `query {
                    User(id: "user.5da6782b-24d6-45a4-92d9-91ab6f92d308") {
                        recordings{asset{url}}
                    }
                }`,
    });

    console.log(recordings);

    return {
        props: { recordings: recordings }, // will be passed to the page component as props
    };
}

export default recordingsPage;
