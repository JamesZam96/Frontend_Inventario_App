import React, {useRef, useEffect, useState} from 'react'
import './registerProduct.css'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Topbar from '../../components/topbar/TopBar.jsx'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import authHelper from '../../helpers/auth.helper'
import axios from 'axios'

export default function RegisterProduct() {
    const [categories, setCategories] = useState([])
    const [providers, setProviders] = useState([])

    useEffect(()=>{
        updateProviders()
        updateCategories()
    },[])

    const updateProviders = function(){
        axios.get(process.env.REACT_APP_API_URL+'createprovider/',{
            headers: {
                'x-auth-token': authHelper.getToken()
            }
        })
        .then(res=>{
            console.log(res)
            setProviders(res.data.providers)
        })
        .catch(err=> console.log(err))
    }
    
    const updateCategories = function(){
        axios.get(process.env.REACT_APP_API_URL+'category/',{
            headers: {
                'x-auth-token': authHelper.getToken()
            }
        })
        .then(res=>{
            console.log(res)
            setCategories(res.data.categories)
        })
        .catch(err=> console.log(err))
    }

    let navigate = useNavigate()

    const barcode = useRef();
    const name = useRef();
    const units = useRef();
    const cost = useRef();
    const price = useRef();
    const discount = useRef();
    const category = useRef();
    const provider = useRef();
    const model = useRef();
    const trademark = useRef();
    const date = useRef();
    const state = useRef();

    const create = async () => {
        let form = new URLSearchParams()
        form.append('barcode', barcode.current.value)
        form.append('name', name.current.value)
        form.append('units', units.current.value)
        form.append('cost', cost.current.value)
        form.append('price', price.current.value)
        form.append('discount', discount.current.value)
        form.append('category', category.current.value)
        form.append('provider', provider.current.value)
        form.append('model', model.current.value)
        form.append('trademark', trademark.current.value)
        form.append('date', date.current.value)
        form.append('state', state.current.value)

        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'product',form,{
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
            <div className="newProduct">
                <h1 className="newProductTitle">Nuevo Producto</h1>
                <h3 className="titleProduct">Datos del Producto</h3>
                <div className="newProductForm">
                    <div className="newProductItem">
                        <label>Código de barras</label>
                        <input ref={barcode} id="barcode" type="number" placeholder="Código de barras" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Nombre</label>
                        <input ref={name} id="name" type="text" placeholder="Nombre" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Unidades</label>
                        <input ref={units} id="units" type="number" placeholder="Unidades" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Costo</label>
                        <input ref={cost} id="cost" type="number" placeholder="Costo" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Precio</label>
                        <input ref={price} id="price" type="number" placeholder="Precio" pattern="-?[0-9]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Descuento</label>
                        <input ref={discount} id="discount" type="text" placeholder="Descuento (%)" pattern="-?[0-9]*(\.[0-9]+)?" maxLength="2" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Categoría</label>
                        <select ref={category} className="newProductSelect">
                            <option value="">Selecione Categoría</option>
                            {
                                categories.map(category=>(
                                    <option value={category.name} key={category._id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Proveedor</label>
                        <select ref={provider} className="newProductSelect">
                            <option value="">Selecione Proveedor</option>
                            {
                                providers.map(provider=>(
                                    <option value={provider.names} key={provider._id}>{provider.names}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Modelo</label>
                        <input id="model" ref={model} type="text" placeholder="Modelo" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Marca</label>
                        <input id="trademark" ref={trademark} type="text" placeholder="Marca" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Fecha</label>
                        <input id="date" ref={date} type="date" required/>
                        <span className="validity"></span>
                    </div>
                    <div className="newProductItem">
                        <label>Estado</label>
                        <select ref={state} className="newProductSelect">
                            <option value="">Selecione Estado</option>
                            <option id="state" value="Activo">Activo</option>
                            <option id="state" value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <button className="newProductButton" onClick={create}>
                            Registrar
                        </button>
                    </div>
                    <Link to="/registercategory" className="link">
                        <div className="newProductItem">
                            <button className="registerCategoryButton">
                                Registrar Categoría
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
