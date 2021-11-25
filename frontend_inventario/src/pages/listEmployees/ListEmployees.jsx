import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listEmployees.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListEmployees() {

    const employees = [
        {nameEmployee:'James', idEmployee: '6731yev', userType: 'Administrador'},
        {nameEmployee:'Luisa', idEmployee: '313uyv3', userType: 'Vendedor'},
    ]

    // const [employees, setEmployees] = useState([])

    // useEffect(()=>{
    //     updateEmployees()
    // },[])

    // const updateEmployees = function(){
    //     axios.get(process.env.REACT_APP_API_URL+'createclient/')
    //     .then(res=>{
    //         console.log(res)
    //         setEmployees(res.data)
    //     })
    //     .catch(err=> console.log(err))
    // }

    return (
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListEmployee">
                    <h1 className="listEmployeeTitle">Lista de Empleados</h1>
                    <TableContainer className="tableContainer">
                    <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nombres</b></TableCell>
                        <TableCell><b>Apellidos</b></TableCell>
                        <TableCell><b>Tipo</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee=>(
                        <TableRow>
                            <TableCell>{employee.nameEmployee}</TableCell>
                            <TableCell>{employee.idEmployee}</TableCell>
                            <TableCell>{employee.userType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
        </div>
    )
}
