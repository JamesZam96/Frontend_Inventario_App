import React from 'react'
import './registerProduct.css'
import SideBar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function RegisterProduct() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="newProduct">
                <h1 className="newProductTitle">Nuevo Producto</h1>
                <h3 className="titleProduct">Datos del Producto</h3>
                <form className="newProductForm">
                    <div className="newProductItem">
                        <label>Código de barras</label>
                        <input type="text" placeholder="Código de barras"/>
                    </div>
                    <div className="newProductItem">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre"/>
                    </div>
                    <div className="newProductItem">
                        <label>Unidades</label>
                        <input type="text" placeholder="Unidades"/>
                    </div>
                    <div className="newProductItem">
                        <label>Precio</label>
                        <input type="text" placeholder="Precio"/>
                    </div>
                    <div className="newProductItem">
                        <label>Descuento</label>
                        <input type="text" placeholder="Descuento (%)"/>
                    </div>
                    <div className="newProductItem">
                        <label>Categoría</label>
                        <select className="newProductSelect" name="active" id="active">
                            <option value="" disabled>Selecione Categoría</option>
                            <option value="Categoría 1">Categoría 1</option>
                            <option value="Categoría 2">Categoría 2</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Proveedor</label>
                        <select className="newProductSelect" name="active" id="active">
                            <option value="" disabled>Selecione Proveedor</option>
                            <option value="Proveedor 1">Proveedor 1</option>
                            <option value="Proveedor 2">Proveedor 2</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Modelo</label>
                        <input type="text" placeholder="Modelo"/>
                    </div>
                    <div className="newProductItem">
                        <label>Marca</label>
                        <input type="text" placeholder="Marca"/>
                    </div>
                    <div className="newProductItem">
                        <label>Fecha</label>
                        <input type="date"/>
                    </div>
                    <div className="newProductItem">
                        <label>Proveedor</label>
                        <select className="newProductSelect" name="active" id="active">
                            <option value="" disabled>Selecione Estado</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Imagen</label>
                        <input type="file"/>
                    </div>
                    <button className="newProductButton">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
