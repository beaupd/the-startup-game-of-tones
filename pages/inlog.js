const LoginPage = () => {
  return (
    <>
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

        <div className="background-imageLogin" id="bgImage"></div>

        <h1>The Game of Tones</h1>

        <p className="para">Creative Music Making</p>

        <form class="formContainer">
          <label class="labelStyle">
            Username:
            <input class="inputStyle" type="text" name="name" />
          </label>
          <label class="labelStyle">
            Password:
            <input class="inputStyle" type="password" name="password" />
          </label>
          <a id="accountCreation" href="createAccount">
            Create account
          </a>
          <a id="ForgotInfo" href="#">
            Forgot password or username?{" "}
          </a>
          <input type="submit" id="inlogButton" value="SIGN IN" />
        </form>
      </main>
    </>
  );
};

export default LoginPage;
