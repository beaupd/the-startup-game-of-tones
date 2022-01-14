const CreateAccountPage = () => {
  return (
    <>
      <main className="container">
        <div className="background-imageLogin" id="bgImage"></div>

        <h1 id="signUpTitle">Create Account</h1>

        <form class="formContainer" method="post">
          <label class="labelStyleSignup">
            First name:
            <input class="inputStyle" type="text" name="name" />
          </label>
          <label class="labelStyleSignup">
            Last name:
            <input class="inputStyle" type="text" name="name" />
          </label>
          <label class="labelStyleSignup">
            Email:
            <input class="inputStyle" type="email" name="email" />
          </label>
          <label class="labelStyleSignup">
            Username:
            <input class="inputStyle" type="text" name="name" />
          </label>
          <label class="labelStyleSignup">
            Password:
            <input class="inputStyle" type="password" name="password" />
          </label>
          <label class="labelStyleSignup">
            Repeat password:
            <input class="inputStyle" type="password" name="password" />
          </label>

          <input type="submit" id="inlogButton" value="SIGN UP" />
        </form>
      </main>
    </>
  );
};

export default CreateAccountPage;
