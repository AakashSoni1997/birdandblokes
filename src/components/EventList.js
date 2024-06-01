import React, { useEffect, useState } from "react";
import "../style/EventList.css";
import { getEventList } from "../utils/method";
import { GET_EVENT_LIST } from "../utils/constant";
import { Link } from "react-router-dom";

function EventList({ events }) {
  const [data, setData] = useState([])
  useEffect(() => {
    getEventList(GET_EVENT_LIST)
      .then(responseData => {
        if (responseData.length) {
          setData(responseData)
        } else {
          console.error('Failed to fetch data.')
        }
      })
      .catch(error => {
        console.error('An error occurred:', error)
      })
  }, [])

  return (
    <div className="event-list">
      <h1>Events List</h1>
      <ul>
        {data?.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>
              {event.date} at {event.time}
            </p>
            <p>Venue: {event.venue}</p>
            <p>Tickets Available: {event.availableTickets}</p>
            <Link to={`/event/${event.id}`}>View Details and Book</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
