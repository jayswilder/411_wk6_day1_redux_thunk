import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FaceIcon from '@material-ui/icons/Face'
import AddCar from '../containers/AddCar'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    const logout = () => {
        document.cookie = "loggedIn=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
        window.location.reload()
    }

    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome!</h4>
            <Chip
                icon={<FaceIcon />}
                label="Logout"
                clickable
                color="primary"
                variant="outlined"
                onClick={logout}
            />
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