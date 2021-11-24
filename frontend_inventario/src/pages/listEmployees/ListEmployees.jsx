import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listEmployees.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListEmployees() {

    const data = [
        {nameEmployee:'James', idEmployee: '6731yev', userType: 'Administrador'},
        {nameEmployee:'Luisa', idEmployee: '313uyv3', userType: 'Vendedor'},
    ]

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
                                    <TableCell><b>Nombre</b></TableCell>
                                    <TableCell><b>Identificación</b></TableCell>
                                    <TableCell><b>Tipo</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(celda=>(
                                    <TableRow>
                                        <TableCell>{celda.nameEmployee}</TableCell>
                                        <TableCell>{celda.idEmployee}</TableCell>
                                        <TableCell>{celda.userType}</TableCell>
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
