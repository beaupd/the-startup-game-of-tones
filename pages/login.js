import Head from "next/head"
import styles from "../styles/LoginPage.module.css"

const LoginPage = () => {
    
    return (
        <>
          <Head>
                <script src="/formValidation.js" defer></script>
            </Head>
           
            <main className={styles.container}>

                <svg width="60px" height="60px" className={styles.musicNote} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#8D74B1"><path fill="#8D74B1" d="M13 4h4v4h-4v9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3V4z" /><path stroke="#8D74B1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17V8m0 9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3zm0-9V4h4v4h-4z" /></svg>

                <div className={styles.background_imageLogin} id="bgImage"></div>

                <h1>The Game of Tones</h1>

                <p className={styles.para}>Creative Music Making</p>


                 <form className={styles.formContainer} method="post" name="myForm" >
                     <label className={styles.labelStyle} id="test">
                        Username:
                        <input className={styles.inputStyle} type="text"  id="username" />
                    </label>
                    <label className={styles.labelStyle}>
                        Password:
                        <input className={styles.inputStyle} type="password" name="password" id="password" />
                        </label>
                        <a id="accountCreation" href="/register">Create account</a>
                        <a id="ForgotInfo" href="#">Forgot password or username? </a>
                    <input type="submit" id="inlogButton" value="SIGN IN"/>
                </form>

            </main>
        </>
    )
}

export default LoginPage