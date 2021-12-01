import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function listTableCategories({categories}) {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nombre</b></TableCell>
                        <TableCell><b>Descripción</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map(category=>(
                        <TableRow key={category._id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
