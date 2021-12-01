import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, {useRef} from "react";
import './Register.css'
import Topbar from "../../topbarLR/topbarLR"

export default function Register() {

    let navigate = useNavigate()

    const storeName = useRef();
    const names = useRef();
    const lastNames = useRef();
    const email = useRef();
    const phone = useRef();
    const pass = useRef();

    const signUp = async () => {
        let form = new URLSearchParams()
        form.append('storeName', storeName.current.value)
        form.append('names', names.current.value)
        form.append('lastNames', lastNames.current.value)
        form.append('email', email.current.value)
        form.append('phone', phone.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'register',form,{
            header: {'Accept': 'application/json'}
        })
        console.log(data)
    }
    
    return (
        <div>
            <Topbar/>
            <div className="Register">
                <h1 className="RegisterTitle">Crear cuenta</h1>
                <p align="center">Por favor diligencie el siguiente formulario para crear una cuenta.</p>
                <div className="RegisterForm">
                        <div className="RegisterItem">
                            <label htmlFor="storeName">Nombre de la Tienda</label>
                            <input ref={storeName} type="text" name="" id="storeName" placeholder="Mi Tienda" />
                        </div>
                        <div className="RegisterItem">
                            <label htmlFor="phone">Teléfono</label>
                            <input ref={phone} type="text" name="" id="phone" placeholder="+1 123 456 78" />
                        </div>
                        <div className="RegisterItem">
                            <label htmlFor="names">Nombres</label>
                            <input ref={names} type="text" name="" id="names" placeholder="Juan" />
                        </div>
                        <div className="RegisterItem">
                            <label htmlFor="lastName">Apellidos</label>
                            <input ref={lastNames} type="text" name="" id="lastNames" placeholder="Castaño" />
                        </div>
                        <div className="RegisterItem">
                            <label htmlFor="email">E-mail</label>
                            <input ref={email} type="email" name="" id="email" placeholder="mitienda@email.com" />
                        </div>
                        <div className="RegisterItem">
                            <label htmlFor="pass">Contraseña</label>
                            <input ref={pass} type="password" name="" id="pass" placeholder="Contraseñ123*" />
                        </div>
                        <div>
                            <button className="RegisterButton" onClick={ () => {signUp(); navigate('/') } }>Registrar</button>
                        </div>
                </div>
            </div>        
        </div>  

        // <Fragment>
        //     <h2>Crear cuenta</h2>
        //     <label htmlFor="storeName">Nombre de la Tienda</label>
        //     <input ref={storeName} type="text" name="" id="storeName" />

        //     <label htmlFor="names">Nombres</label>
        //     <input ref={names} type="text" name="" id="names" />

        //     <label htmlFor="lastName">Apellidos</label>
        //     <input ref={lastNames} type="text" name="" id="lastNames" />

        //     <label htmlFor="phone">Teléfono</label>
        //     <input ref={phone} type="text" name="" id="phone" />

        //     <label htmlFor="email">E-mail</label>
        //     <input ref={email} type="email" name="" id="email" />

        //     <label htmlFor="pass">Contraseña</label>
        //     <input ref={pass} type="password" name="" id="pass" />

        //     <button onClick={signUp}>Registrar</button>
        // </Fragment>
    )
}