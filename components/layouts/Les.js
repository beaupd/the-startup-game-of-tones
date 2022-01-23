const Les = ({ children, sideBarTitle, type }) => {
  const color = {
    bgColor: {
      blue: "bg-blue",
      green: "bg-green",
      yellow: "bg-yellow",
      orange: "bg-orange",
      purple: "bg-purple",
      mixed: "bg-mixed" 
    }[type],
    bgColorLight: {
      blue: "bg-blue-light",
      green: "bg-green-light",
      yellow: "bg-yellow-light",
      orange: "bg-orange-light",
      purple: "bg-purple-light",
      mixed: "bg-mixed-l" 
    }[type],
  };



  return (
    <>
      <nav className={`${color.bgColorLight} topBar`} id="topBar">
        <div className="circleIcon">
          <img src="/icons/music-note2.svg" alt="music-note" />
        </div>
        <div>
          <hr />
        </div>
        <div className="circleIcon">
          {" "}
          <img src="/icons/profile.svg" alt="profile" />
        </div>
      </nav>

      <aside className={`${color.bgColor} sideBar`} id="sideBar" >
        <a href="/icons/home.html">
          <img
            className="sideBarItem"
            src="/icons/menu-button.svg"
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
          <img src="/icons/arrow-right.svg" alt="" />
        </a>
      </main>
    </>
  );
};

export default Les;
