const Les = ({ children, header, sideBarTitle, type }) => {
    
    const color = {
        bgColor: {
            blue: "bg-blue",
            green: "bg-green",
            yellow: "bg-yellow",
            orange: "bg-orange",
        }[type],
        bgColorLight: {
            blue: "bg-blue-light",
            green: "bg-green-light",
            yellow: "bg-yellow-light",
            orange: "bg-orange-light",
        }[type],
    };

    console.log(color.bgColor, color.bgColorLight)
    
    return (
        <>
            <nav class="topBar" id="topBar">

                <div class="circleIcon"><img src="/music-note2.svg" alt="music-note" /></div>
                <div>
                    <hr/>
                </div>
                <div class="circleIcon"> <img src="/profile.svg" alt="profile" /></div>

            </nav>


            <aside class="sideBar" id="sideBar">
                <a href="/home.html">
                    <img class="sideBarItem" src="/menu-button.svg" alt="menu-button" /></a>
                <p id="menuButtonText">Menu</p>

                <h2 class="sideBarItem1" id="sideBartext">{sideBarTitle}</h2>

            </aside>

            <main class="main">
                <header>
                    <h1 class="chapterHeader" id="chapterHeader">{header}</h1>
                </header>

                {children}

                <a class="continueContainer" id="nextChapterLink"  href="#">
                    <p id="nextChapter">Continue</p>
                    <img src="/arrow-right.svg" alt=""/>
                </a>
            </main>
        </>
    )
}

export default Les