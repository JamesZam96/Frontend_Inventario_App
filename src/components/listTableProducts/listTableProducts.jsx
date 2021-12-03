import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function listTableProducts({products}) {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nombre</b></TableCell>
                        <TableCell><b>Código</b></TableCell>
                        <TableCell><b>Stock</b></TableCell>
                        <TableCell><b>Precio</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(product=>(
                        <TableRow key={product._id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.barcode}</TableCell>
                            <TableCell>{product.units}</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>  
        </div>
    )
}
