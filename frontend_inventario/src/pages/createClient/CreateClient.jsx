import React, {useRef} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import './createClient.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

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
            header: {'Accept': 'application/json'}
        })
        navigate('/')
        console.log(data)
    }

    return (
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
                        <input ref={names} id="names" type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newClientItem">
                        <label>Apellidos</label>
                        <input ref={lastNames} id="lastNames" type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newClientItem">
                        <label>Identificación</label>
                        <input ref={identification} id="identification" type="text" placeholder="Identificación"/>
                    </div>
                    <div className="newClientItem">
                        <label>Dirección</label>
                        <input ref={address} id="address" type="text" placeholder="Dirección"/>
                    </div>
                    <div className="newClientItem">
                        <label>Email</label>
                        <input ref={email} id="email" type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="newClientItem">
                        <label>Teléfono</label>
                        <input ref={phone} id="phone" type="text" placeholder="Teléfono"/>
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
    </div>
    )
}
