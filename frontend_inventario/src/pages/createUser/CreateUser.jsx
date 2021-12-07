import React, {useRef} from 'react'
import axios from 'axios'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import './createUser.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'
import authHelper from '../../helpers/auth.helper'

export default function CreateUser() {

    let navigate = useNavigate()
    
    const userType = useRef();
    const names = useRef();
    const lastNames = useRef();
    const email = useRef();
    const phone = useRef();
    const pass = useRef();

    const signUp = async () => {
        let form = new URLSearchParams()
        form.append('userType', userType.current.value)
        form.append('names', names.current.value)
        form.append('lastNames', lastNames.current.value)
        form.append('email', email.current.value)
        form.append('phone', phone.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'registerEmployee',form,{
            header: {'Accept': 'application/json'}
        })
        navigate('/')
        console.log(data)
    }

    return (
        authHelper.getToken()?
        <div>
        <Topbar/>
        <div className="container">
            <SideBar />
            <div className="newEmployee">
                <h1 className="newEmployeeTitle">Nuevo Empleado</h1>
                <h3 className="titleEmployee">Datos del Empleado</h3>
                <div className="newEmployeeForm">
                    <div className="newEmployeeItem">
                        <label>Nombres</label>
                        <input ref={names} id="names" type="text" placeholder="Nombres" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Apellidos</label>
                        <input ref={lastNames} id="lastNames" type="text" placeholder="Apellidos" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Teléfono</label>
                        <input ref={phone} id="phone" type="number" placeholder="Teléfono" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Tipo de Usuario</label>
                        <select ref={userType} className="newEmployeeSelect" name="active" id="active">
                            <option value="">Seleccione el tipo</option>
                            <option id="userType" value="Administrador">Administrador</option>
                            <option id="userType" value="Vendedor">Vendedor</option>
                        </select>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Email</label>
                        <input ref={email} id="email" type="email" placeholder="ejemplo@ejemplo.com" required/>
                        <span className="validity"></span>
                    </div>                    
                    <div className="newEmployeeItem">
                        <label>Contraseña</label>
                        <input ref={pass} id="pass" type="password" placeholder="Contraseña" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ,;.:-_*]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newEmployeeItem">
                    <button className="newEmployeeButton" onClick={signUp}>
                        Crear
                    </button>
                    </div>
                    <Link to="/listemployee" className="link">
                    <div className="newEmployeeItem">
                        <button className="listEmployeeButton">
                            Lista de Empleados
                        </button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>:
        <Navigate to={'/'}/>
    )
}
