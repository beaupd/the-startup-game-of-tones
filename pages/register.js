import styles from "../styles/RegisterPage.module.css"
import {useSession} from "next-auth/client";
import {useState} from "react";
import validator from "validator";

const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [session, loading] = useSession();
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(true);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validator.isEmail(email) && password >= 8 && password == password1 && name >= 3) {
            const user = await signUp({
                email,
                password,
                name,
            })

            consolee.log(user);
        }
    }

    const validate = () => {
        if (validator.isEmail(email) && password >= 8 && password == password1 && name >= 3) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
           
            <main className={styles.container}>


                <div className={styles.background_imageLogin} id="bgImage"></div>

                <h1 id="signUpTitle">Create Account</h1>


                 <form className={styles.formContainer} onSubmit={}>
                    
                     <label className={styles.labelStyleSignup}>
                        Name:
                        <input className={styles.inputStyle} type="text" name="name" onChange={e => setName(e.target.value)} required/>
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Email:
                        <input className={styles.inputStyle} type="email" name="email" onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <label className={styles.labelStyleSignup}>                       
                        Password:
                        <input className={styles.inputStyle} type="password" name="password" onChange={e => setPassword(e.target.value)} required/>
                    </label>
                    <label className={styles.labelStyleSignup}>                       
                       Repeat password:
                        <input className={styles.inputStyle} type="password" name="password1" onChange={e => setPassword1(e.target.value)} required/>
                    </label>
                     
                    <input type="submit" id={styles.inlogButton} value="SIGN UP" disabled={disabled} />
                </form>

            </main>
        </>
    )
}

export default RegisterPage