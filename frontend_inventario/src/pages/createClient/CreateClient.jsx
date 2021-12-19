import React, {useRef} from 'react'
import axios from 'axios'
import { useNavigate, Link , Navigate} from 'react-router-dom';
import './createClient.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'
import authHelper from '../../helpers/auth.helper'

export default function CreateClient() {

    let navigate = useNavigate()
    
    const names = useRef();
    const lastNames = useRef();
    const identification = useRef();
    const address = useRef();
    const email = useRef();
    const phone = useRef();

    const create = async () => {
        let form = new URLSearchParams()
        form.append('names', names.current.value)
        form.append('lastNames', lastNames.current.value)
        form.append('identification', identification.current.value)
        form.append('address', address.current.value)
        form.append('email', email.current.value)
        form.append('phone', phone.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'createclient',form,{
            headers: {'Accept': 'application/json',
                    'x-auth-token':authHelper.getToken()}
        })
        navigate('/')
        console.log(data)
    }
 
    return (
        authHelper.getToken()?
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newClient">
                <h1 className="newClientTitle">Nuevo Cliente</h1>
                <h3 className="titleClient">Datos del Cliente</h3>
                <div className="newClientForm">
                    <div className="newClientItem">
                        <label>Nombres</label>
                        <input ref={names} id="names" type="text" placeholder="Nombres" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <label>Apellidos</label>
                        <input ref={lastNames} id="lastNames" type="text" placeholder="Apellidos" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <label>Identificación</label>
                        <input ref={identification} id="identification" type="number" placeholder="Identificación" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <label>Dirección</label>
                        <input ref={address} id="address" type="text" placeholder="Dirección" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <label>Email</label>
                        <input ref={email} id="email" type="email" placeholder="ejemplo@ejemplo.com" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <label>Teléfono</label>
                        <input ref={phone} id="phone" type="number" placeholder="Teléfono" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newClientItem">
                        <button className="newClientButton" onClick={create}>
                            Crear
                        </button>
                    </div>
                    <Link to="/listclient" className="link">
                        <div className="newClientItem">
                            <button className="listClientButton">
                                Lista de Clientes
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
