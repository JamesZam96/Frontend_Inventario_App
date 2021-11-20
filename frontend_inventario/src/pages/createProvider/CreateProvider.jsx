import React, {useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './createProvider.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'

export default function CreateProvider() {

    let navigate = useNavigate()
    
    const names = useRef();
    const lastNames = useRef();
    const identification = useRef();
    const address = useRef();
    const email = useRef();
    const phone = useRef();
    const web = useRef();

    const create = async () => {
        let form = new URLSearchParams()
        form.append('names', names.current.value)
        form.append('lastNames', lastNames.current.value)
        form.append('identification', identification.current.value)
        form.append('address', address.current.value)
        form.append('email', email.current.value)
        form.append('phone', phone.current.value)
        form.append('web', web.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'createprovider',form,{
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
            <div className="newProvider">
                <h1 className="newProviderTitle">Nuevo Proveedor</h1>
                <h3 className="titleProvider">Datos del Proveedor</h3>
                <div className="newProviderForm">
                    <div className="newProviderItem">
                        <label>Nombres</label>
                        <input ref={names} id="names" type="text" placeholder="Nombres"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Apellidos</label>
                        <input ref={lastNames} id="lastNames" type="text" placeholder="Apellidos"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Identificación</label>
                        <input ref={identification} id="identification" type="text" placeholder="Identificación"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Dirección</label>
                        <input ref={address} id="address" type="text" placeholder="Dirección"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Email</label>
                        <input ref={email} id="email" type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Teléfono</label>
                        <input ref={phone} id="phone" type="text" placeholder="Teléfono"/>
                    </div>
                    <div className="newProviderItem">
                        <label>Web</label>
                        <input ref={web} id="web" type="text" placeholder="Web"/>
                    </div>
                    <button className="newProviderButton" onClick={create}>
                        Crear
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
