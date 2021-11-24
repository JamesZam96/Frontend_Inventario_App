import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listProviders.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListProviders() {

    const data = [
        {nameProvider:'James', idProvider: '6731yev'},
        {nameProvider:'Luisa', idProvider: '313uyv3'},
    ]

    return (
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListProvider">
                    <h1 className="listProviderTitle">Lista de Proveedores</h1>
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
                                        <TableCell>{celda.nameProvider}</TableCell>
                                        <TableCell>{celda.idProvider}</TableCell>
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
