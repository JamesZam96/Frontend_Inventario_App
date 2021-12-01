import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listProviders.css'
import {TableContainer} from '@material-ui/core'
import axios from 'axios'
import ListTableProviders from '../../components/listTableProviders/listTableProviders'
import { Navigate } from 'react-router-dom'
import authHelper from '../../helpers/auth.helper'

export default function ListProviders() {

    const [providers, setProviders] = useState([])

    useEffect(()=>{
        updateProviders()
    },[])

    const updateProviders = function(){
        axios.get(process.env.REACT_APP_API_URL+'createprovider/')
        .then(res=>{
            console.log(res)
            setProviders(res.data)
        })
        .catch(err=> console.log(err))
    }

    return (
        authHelper.getToken()?
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListProvider">
                    <h1 className="listProviderTitle">Lista de Proveedores</h1>
                    <TableContainer className="tableContainer">
                        <ListTableProviders providers={providers}/>
                    </TableContainer>
                </div>
            </div>
        </div>
        </div>:
        <Navigate to={'/'}/>
    )
}
