import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listClients.css'
import {TableContainer} from '@material-ui/core'
import axios from 'axios'
import ListTableClients from '../../components/listTableClients/ListTableClients'
import authHelper from '../../helpers/auth.helper'
import {Navigate} from 'react-router-dom'

export default function ListClients() {

    const [clients, setClients] = useState([])

    useEffect(()=>{
        updateClients()
    },[])

    const updateClients = function(){
        axios.get(process.env.REACT_APP_API_URL+'createclient/')
        .then(res=>{
            console.log(res)
            setClients(res.data)
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
                <div className="tableListClient">
                    <h1 className="listClientTitle">Lista de Clientes</h1>
                    <TableContainer className="tableContainer">
                        <ListTableClients clients={clients}/>
                    </TableContainer>
                </div>
            </div>
        </div>
        </div>:
        <Navigate to={'/'}/>
    )
}
