import Head from "next/head"
import styles from "../styles/Volume1Page.module.css";
import SvgComponent from "./kleurencirkel";

const volume1Page = () => {
    
    return (
        <>
        
            <div className="background-imageIntro" id="bgImage"></div>      

                <nav className={styles.topBar}>

                    <div className={styles.circleIcon}><img src={"./icons/music-note2.svg"} alt="music-note"></img></div>
                
                    <div className={styles.circleIcon}> <img src={"./icons/profile.svg"} alt="profile"></img></div>

                </nav>


                <aside className={styles.sideBar}>
                    <a href="/#">
                        <img className={styles.sideBarItem} src={"./icons/menu-button.svg"} alt="menu-button"></img></a>
                    <p>Menu</p>

                    <h2 className={styles.sideBarItem1}>My Recordings</h2>

                </aside>

                <main className={styles.main}>
                
                <div className={styles.KleurenCirkelContainer}>
                    <SvgComponent />
                </div>





  
            </main>






        </>
    )
}






export default volume1Page
