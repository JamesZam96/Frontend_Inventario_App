import React, {useRef} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './registerCategory.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'
import authHelper from '../../helpers/auth.helper'
import axios from 'axios';

export default function RegisterCategory() {

    let navigate = useNavigate()

    const name = useRef();
    const description = useRef();

    const create = async () => {
        let form = new URLSearchParams()
        form.append('name', name.current.value)
        form.append('description', description.current.value)

        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'category',form,{
            headers: {'Accept': 'application/json',
                    'x-auth-token': authHelper.getToken()}
        })
        navigate('/home')
        console.log(data)
    }

    return (
        authHelper.getToken()?
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newCategory">
                <h1 className="newCategoryTitle">Nueva Categoría</h1>
                <h3 className="titleCategory">Datos de la Categoría</h3>
                <div className="newCategoryForm">
                    <div className="newCategoryItem">
                        <label>Nombre</label>
                        <input ref={name} id="name" type="text" placeholder="Nombre" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newCategoryItem">
                        <label>Descripción</label>
                        <input ref={description} id="description" type="text" placeholder="Descripción" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newCategoryItem">
                        <button className="newCategoryButton" onClick={create}>
                            Crear
                        </button>
                    </div>
                    <Link to="/listcategory" className="link">
                        <div className="newCategoryItem">
                            <button className="listCategoryButton">
                                Lista de Categorías
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
