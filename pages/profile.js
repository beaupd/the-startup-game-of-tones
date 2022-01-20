import Head from "next/head"
import styles from "../styles/ProfilePage.module.css";


const profilePage = () => {
    
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

    <h2 className={styles.sideBarItem1}>My Profile</h2>

</aside>

<main className={styles.main}>

<a  href="#" className={styles.backContainer}>
<img src={"/arrow-left.svg"} alt="arrow left"></img>
        <p>Back</p>      
    </a>

    <header>
        <h1 className={styles.chapterHeader}>My Profile</h1>
    </header>

<div className={styles.profileContainer} >
  <section className={styles.generalInfo} >
        <h2 className={styles.generalInfoHeader}>General Info</h2>
        <div className={styles.dataContainer}>
        <p className={styles.userData}>Name:</p>
        <p className={styles.userData}>Email:</p>
        <p className={styles.userData}>Password:</p>
        </div>

  </section>

  <section className={styles.chapters} >
        <h2 className={styles.generalInfoHeader}>Chapters</h2>
        <div className={styles.dataContainer}>
        <p className={styles.chapterData}>Current chapter:</p>
        <p className={styles.chapterData}>Chapter progression:</p>

        </div>

  </section>
  </div>

  
</main>

        </>
    )
}

export default profilePage
