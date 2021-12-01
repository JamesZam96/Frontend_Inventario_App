import axios from 'axios'
import React, {useRef} from "react";
import authHelper from '../../../helpers/auth.helper'
import { useNavigate, Navigate } from 'react-router-dom';
import './Login.css'
import logo from "./logo-login.svg"
import TopBar from '../../topbarLR/topbarLR';

export default function Login() {

    let navigate = useNavigate()
    
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
        // Almacenar token en el localstorage:
        authHelper.setToken(data.data.token)
        // Direccionar a la página de inicio al ingresar:
        navigate('/home')
        console.log(data.data)
    }
    
    return (
        !authHelper.getToken()?
        <div>
            <TopBar/>
            <div className="Login">
                <h1 className="LoginTitle">Iniciar sesión</h1>
                    
                    {/* Formulario: email y contraseña */}
                    <div className="LoginContainer">
                        {/* Logo de inicio de sesión */}
                        <div align="center">
                            <img src={logo} className="LoginLogo" alt="logo" />
                        </div>
                        {/* Campo para ingresar el email */}
                        <div className="LoginItem">
                            <label htmlFor="email">E-mail</label>
                            <input ref={email} type="email" name="" id="email" placeholder="mitienda@email.com" />
                        </div>
                        {/* Campo para ingresar la contraseña */}
                        <div className="LoginItem">
                            <label htmlFor="pass">Contraseña</label>
                            <input ref={pass} type="password" name="" id="pass" placeholder="Contraseña123*" />
                        </div>
                        {/* Botón para ingresar */}
                        <div>
                            <button className="LoginButton" onClick={signIn}>Ingresar</button>
                        </div>
                    </div>
                    {/* Sección para crear cuenta si no tiene una */}
                    <div align="center" className="RegisterContainer">
                        <label>¿No tienes una cuenta?</label>
                        <button className="SignUpButton" onClick={() => navigate('/register')}>Crear cuenta</button>
                    </div>
            </div>   
        </div>:
        <Navigate to={'/home'}/>     

        // <Fragment>
        //     <h2>Iniciar sesión</h2>
        //     <label htmlFor="email">E-mail</label>
        //     <input ref={email} type="email" name="" id="email" />
        //     <label htmlFor="pass">Contraseña</label>
        //     <input ref={pass} type="password" name="" id="pass" />
        //     <button onClick={signIn}>Ingresar</button>
        // </Fragment>
    )
}
