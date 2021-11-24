import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listClients.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListClients() {

    const data = [
        {nameClient:'James', idClient: '6731yev'},
        {nameClient:'Luisa', idClient: '313uyv3'},
    ]

    return (
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListClient">
                    <h1 className="listClientTitle">Lista de Clientes</h1>
                    <TableContainer className="tableContainer">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Nombre</b></TableCell>
                                    <TableCell><b>Identificación</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(celda=>(
                                    <TableRow>
                                        <TableCell>{celda.nameClient}</TableCell>
                                        <TableCell>{celda.idClient}</TableCell>
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
