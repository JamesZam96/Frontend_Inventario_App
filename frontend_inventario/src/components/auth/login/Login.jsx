import axios from 'axios'
import React, {useRef} from "react";
import './Login.css'
import logo from "./logo-login.svg"

export default function Login() {
    
    const email = useRef();
    const pass = useRef();

    const signIn = async () => {
        let form = new URLSearchParams()
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'login',form,{
            header: {'Accept': 'application/json'}
        })
        console.log(data)
    }
    
    return (
        
        <div className="Login">
            <h1 align="center">Iniciar sesión</h1>
            <form>
                <div align="center">
                    <img src={logo} className="LoginLogo" alt="logo" />
                </div>
                <div className="LoginContainer">
                    <div className="LoginItem">
                        <label htmlFor="email">E-mail</label>
                        <input ref={email} type="email" name="" id="email" placeholder="mitienda@email.com" />
                    </div>
                    <div className="LoginItem">
                        <label htmlFor="pass">Contraseña</label>
                        <input ref={pass} type="password" name="" id="pass" placeholder="Contraseña123*" />
                    </div>
                    <div>
                        <button className="LoginButton" onClick={signIn}>Ingresar</button>
                    </div>
                </div>
                <div align="center" className="RegisterContainer">
                    <label>¿No tienes una cuenta?</label>
                    <button className="SignUpButton">Crear cuenta</button>
                </div>
            </form>
      </div>        

        // <Fragment>
        //     <h2>Inicio de sesión</h2>
        //     <label htmlFor="email">E-mail</label>
        //     <input ref={email} type="email" name="" id="email" />
        //     <label htmlFor="pass">Contraseña</label>
        //     <input ref={pass} type="password" name="" id="pass" />
        //     <button onClick={signIn}>Ingresar</button>
        // </Fragment>
    )
}
