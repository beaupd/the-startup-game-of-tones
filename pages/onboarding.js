import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <script src="/script.js" defer></script>
      </Head>
      <main className="container">
        <svg
          width="60px"
          height="60px"
          className="musicNote"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#8D74B1"
        >
          <path
            fill="#8D74B1"
            d="M13 4h4v4h-4v9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3V4z"
          />
          <path
            stroke="#8D74B1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 17V8m0 9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3zm0-9V4h4v4h-4z"
          />
        </svg>

        <div className="background-image" id="bgImage"></div>

        <h1>The Game of Tones</h1>

        <p className="para">Creative Music making</p>

        <h2 id="uspText">
          <span>Aqcuire</span> the
          <span> tools</span> to
          <span> discover</span>
          <br /> and <span>express</span> your
          <span> own musical style</span>
        </h2>

        <div className="radioButtons">
          <input id="usp1" type="radio" name="usp" defaultChecked />
          <input id="usp2" type="radio" name="usp" />
          <input id="usp3" type="radio" name="usp" />
        </div>
        <a id="button" href="/home.html">
          SKIP
        </a>
      </main>
    </>
  );
};

export default IndexPage;
