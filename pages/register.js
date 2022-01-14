import styles from "../styles/RegisterPage.module.css"

const RegisterPage = () => {
    
    return (
        <>
           
            <main className={styles.container}>


                <div className={styles.background_imageLogin} id="bgImage"></div>

                <h1 id="signUpTitle">Create Account</h1>


                 <form className={styles.formContainer} method="post">
                    
                     <label className={styles.labelStyleSignup}>
                        First name:
                        <input className={styles.inputStyle} type="text" name="name" />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Last name:
                        <input className={styles.inputStyle} type="text" name="name" />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Email:
                        <input className={styles.inputStyle} type="email" name="email" />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Username:
                        <input className={styles.inputStyle} type="text" name="name" />
                    </label>
                    <label className={styles.labelStyleSignup}>                       
                        Password:
                        <input className={styles.inputStyle} type="password" name="password" />
                        </label>
                        <label className={styles.labelStyleSignup}>                       
                       Repeat password:
                        <input className={styles.inputStyle} type="password" name="password" />
                        </label>
                     
                    <input type="submit" id={styles.inlogButton} value="SIGN UP" />
                </form>

            </main>
        </>
    )
}

export default RegisterPage