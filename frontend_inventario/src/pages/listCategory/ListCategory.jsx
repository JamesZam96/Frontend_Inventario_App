import React from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listCategory.css'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListCategory() {

    const data = [
        {nameCategory:'James', descriptionCategory: '6731yev'},
        {nameCategory:'Luisa', descriptionCategory: '313uyv3'},
    ]

    return (
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListCategory">
                    <h1 className="listCategoryTitle">Lista de Categorías</h1>
                    <TableContainer className="tableContainer">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Nombre</b></TableCell>
                                    <TableCell><b>Descripción</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(celda=>(
                                    <TableRow>
                                        <TableCell>{celda.nameCategory}</TableCell>
                                        <TableCell>{celda.descriptionCategory}</TableCell>
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
