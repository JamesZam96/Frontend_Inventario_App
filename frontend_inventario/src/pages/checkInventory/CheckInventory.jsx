import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './checkinventory.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function CheckInventory() {

    const data = [
        {nameProduct:'Carro', codeProduct: '6731yev', stock: '45', price: 45000000},
        {nameProduct:'Moto', codeProduct: '313uyv3', stock: '23', price: 1000000},
    ]

    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableInventory">
                    <h1 className="listProductTitle">Lista de Productos</h1>
                    <TableContainer className="tableContainer">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Nombre</b></TableCell>
                                    <TableCell><b>Código</b></TableCell>
                                    <TableCell><b>Stock</b></TableCell>
                                    <TableCell><b>Precio ($)</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(celda=>(
                                    <TableRow>
                                        <TableCell>{celda.nameProduct}</TableCell>
                                        <TableCell>{celda.codeProduct}</TableCell>
                                        <TableCell>{celda.stock}</TableCell>
                                        <TableCell>{celda.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}
