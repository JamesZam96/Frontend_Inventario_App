import React, {useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './createUser.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

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
                        <input ref={names} id="names" type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Apellidos</label>
                        <input ref={lastNames} id="lastNames" type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Teléfono</label>
                        <input ref={phone} id="phone" type="text" placeholder="Teléfono"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Tipo de Usuario</label>
                        <select className="newEmployeeSelect" name="active" id="active">
                            <option ref={userType} id="userType" value="Administrador">Administrador</option>
                            <option ref={userType} id="userType" value="Vendedor">Vendedor</option>
                        </select>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Email</label>
                        <input ref={email} id="email" type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>                    
                    <div className="newEmployeeItem">
                        <label>Contraseña</label>
                        <input ref={pass} id="pass" type="password" placeholder="Contraseña"/>
                    </div>
                    <button className="newEmployeeButton" onClick={signUp}>
                        Crear
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
