import React from 'react'
import './createUser.css'
import SideBar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function CreateUser() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newEmployee">
                <h1 className="newEmployeeTitle">Nuevo Empleado</h1>
                <h3 className="titleEmployee">Datos del Empleado</h3>
                <form className="newEmployeeForm">
                    <div className="newEmployeeItem">
                        <label>Nombres</label>
                        <input type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Apellidos</label>
                        <input type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Identificación</label>
                        <input type="text" placeholder="Identificación"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Dirección</label>
                        <input type="text" placeholder="Dirección"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Email</label>
                        <input type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Teléfono</label>
                        <input type="text" placeholder="Teléfono"/>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Tipo de Usuario</label>
                        <select className="newEmployeeSelect" name="active" id="active">
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                    </div>
                    <div className="newEmployeeItem">
                        <label>Contraseña</label>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                    <button className="newEmployeeButton">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
