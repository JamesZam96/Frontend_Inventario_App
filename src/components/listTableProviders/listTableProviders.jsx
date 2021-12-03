import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function listTableProviders({providers}) {
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
                    {providers.map(provider=>(
                        <TableRow key={provider._id}>
                            <TableCell>{provider.names}</TableCell>
                            <TableCell>{provider.identification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
