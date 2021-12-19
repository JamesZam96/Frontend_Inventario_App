import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './checkinventory.css'
import {TableContainer} from '@material-ui/core'
import authHelper from '../../helpers/auth.helper'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import ListTableProducts from '../../components/listTableProducts/listTableProducts'

export default function CheckInventory() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        updateProducts()
    },[])

    const updateProducts = function(){
        axios.get(process.env.REACT_APP_API_URL+'product/',{
            headers: {
                'x-auth-token': authHelper.getToken()
            }
        })
        .then(res=>{
            console.log(res)
            setProducts(res.data.products)
        })
        .catch(err=> console.log(err))
    }

    return (
        authHelper.getToken()?
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableInventory">
                    <h1 className="listProductTitle">Lista de Productos</h1>
                    <TableContainer className="tableContainer">
                        <ListTableProducts products={products}/>
                    </TableContainer>
                </div>
            </div>
        </div>:
        <Navigate to={'/'}/>
    )
}
