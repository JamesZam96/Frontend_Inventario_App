import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function ListTableClients({clients}) {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Nombre</b></TableCell>
                        <TableCell><b>Identificación</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client=>(
                        <TableRow key={client._id}>
                            <TableCell>{client.names}</TableCell>
                            <TableCell>{client.identification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
