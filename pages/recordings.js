import Head from "next/head"
import styles from "../styles/RecordingsPage.module.css";


const recordingsPage = () => {
    
    return (
        <>
        
            <div className="background-imageIntro" id="bgImage"></div>      

<nav className={styles.topBar}>

    <div className={styles.circleIcon}><img src={"./music-note2.svg"} alt="music-note"></img></div>
 
    <div className={styles.circleIcon}> <img src={"./profile.svg"} alt="profile"></img></div>

</nav>


<aside className={styles.sideBar}>
    <a href="/#">
        <img className={styles.sideBarItem} src={"./menu-button.svg"} alt="menu-button"></img></a>
    <p>Menu</p>

    <h2 className={styles.sideBarItem1}>My Recordings</h2>

</aside>

<main className={styles.main}>

<a  href="#" className={styles.backContainer}>
<img src={"/arrow-left.svg"} alt="arrow left"></img>
        <p>Back</p>      
    </a>

    <header>
        <h1 className={styles.chapterHeader}>My Recordings</h1>
    </header>


  
    <section className={styles.recording}>
    
    <div className={styles.recordingGridItem1}>Chapter 1.1 <br/> <span className={styles.spanItem} >Exercise 1</span></div>
    <div className={styles.recordingGridItem2}><img className={styles.recordingSVG} src={"/play-button.svg"} alt="play button"></img></div>
  
    <div className={styles.recordingGridItem3}><img className={styles.recordingSVG} src={"/trash-can.svg"} alt="trashcan"></img></div>
    <div className={styles.recordingGridItem}></div>
    <div className={styles.recordingGridItem4}>Go to exercise</div>
   
    </section>


  
</main>






        </>
    )
}

export default recordingsPage
