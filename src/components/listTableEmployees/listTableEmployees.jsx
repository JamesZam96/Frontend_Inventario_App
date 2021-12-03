import React from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'
 
export default function listTableEmployees({employees}) {
    return (
        <div>
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
                        <TableRow key={employee._id}>
                            <TableCell>{employee.names}</TableCell>
                            <TableCell>{employee.lastNames}</TableCell>
                            <TableCell>{employee.userType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
