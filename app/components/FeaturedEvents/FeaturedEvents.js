import React from 'react'

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
                <a href="#">{event.name}</a>
                <strong>{event.date}</strong>
            </td>
        </tr>
    ))
);

export default FeaturedEvents
