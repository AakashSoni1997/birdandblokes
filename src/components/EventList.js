import React from "react";
import { Link } from "react-router-dom";
import "../style/EventList.css";

function EventList({ events }) {
  return (
    <div className="event-list">
      <h1>Events List</h1>
      <ul>
        {events.map((event) => (
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
