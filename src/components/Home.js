import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="card-container">
            {props.cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.name.toUpperCase()}</span>
                        <ul>
                            <li>Description: {car["description"]}</li>
                            <li>Hours: {car["hours"]}</li>
                            <li>Address: {car["address"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home