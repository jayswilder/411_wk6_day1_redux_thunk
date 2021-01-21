import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCar from '../containers/AddCar'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome,</h4>
            <div className="flex-container">
                <AddCar carTotal={props.cars.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.cars.map((car, idx) => (
                        <TableRow key={idx}>
                            <TableCell><Link to={`/car/${car.id}`}>{car["name"]}</Link></TableCell>
                            <TableCell>{car["description"]}</TableCell>
                            <TableCell>{car["hours"]}</TableCell>
                            <TableCell>{car["address"]}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    // add onClick method here
                                    onClick={() => props.removeCar(idx)}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </Container>
    )
}

export default Dashboard