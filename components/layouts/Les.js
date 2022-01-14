const Les = ({ children, sideBarTitle, type }) => {
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

    // console.log(color.bgColor, color.bgColorLight)

    return (
        <>
            <nav className="topBar" id="topBar">
                <div className="circleIcon">
                    <img src="/music-note2.svg" alt="music-note" />
                </div>
                <div>
                    <hr />
                </div>
                <div className="circleIcon">
                    {" "}
                    <img src="/profile.svg" alt="profile" />
                </div>
            </nav>

            <aside className="sideBar" id="sideBar">
                <a href="/home.html">
                    <img
                        className="sideBarItem"
                        src="/menu-button.svg"
                        alt="menu-button"
                    />
                </a>
                <p id="menuButtonText">Menu</p>

                <h2 className="sideBarItem1" id="sideBartext">
                    {sideBarTitle}
                </h2>
            </aside>

            <main className="main">
                {children}

                <a className="continueContainer" id="nextChapterLink" href="#">
                    <p id="nextChapter">Continue</p>
                    <img src="/arrow-right.svg" alt="" />
                </a>
            </main>
        </>
    );
};

export default Les;
