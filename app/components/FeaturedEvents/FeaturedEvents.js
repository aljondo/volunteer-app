import React from 'react'
import { Link } from 'react-router'


const FeaturedEvents = (props) => (
    <table className = "table">
        <thead>
            <tr>
              <th>
                  <h3>Featured Events</h3>
              </th>
            </tr>
        </thead>
        <tbody>
            {genEventList(props.events)}
        </tbody>
    </table>
);

const genEventList = (events) => (
    events.map((event, index) => (
        <tr key={ index }>
            <td>
                <Link to={'/event/'+ event.id}>
                {event.name}
                </Link>
                <strong>{event.date}</strong>
            </td>
        </tr>
    ))
);

export default FeaturedEvents
