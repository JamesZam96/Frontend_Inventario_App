import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listEmployees.css'
import {TableContainer} from '@material-ui/core'
import { Navigate } from 'react-router-dom'
import authHelper from '../../helpers/auth.helper'
import axios from 'axios'
import ListTableEmployees from '../../components/listTableEmployees/listTableEmployees'

export default function ListEmployees() {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        updateEmployees()
    },[])

    const updateEmployees = function(){
        axios.get(process.env.REACT_APP_API_URL+'registerEmployee/',{
            headers: {
                'x-auth-token': authHelper.getToken()
            }
        })
        .then(res=>{
            console.log(res)
            setEmployees(res.data.employees)
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
                <div className="tableListEmployee">
                    <h1 className="listEmployeeTitle">Lista de Empleados</h1>
                    <TableContainer className="tableContainer">
                        <ListTableEmployees employees={employees}/>
                    </TableContainer>
                </div>
            </div>
        </div>
        </div>:
        <Navigate to={'/'}/>
    )
}
