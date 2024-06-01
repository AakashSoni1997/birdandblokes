import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import events from "../components/common/events";
import "../style/EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  console.log("id", id);
  const event = events.find((event) => event.id === parseInt(id));
  const [availableTickets, setAvailableTickets] = useState(
    event.availableTickets
  );
  const [bookedTickets, setBookedTickets] = useState(0);

  const handleBooking = (e) => {
    e.preventDefault();
    const requestedTickets = parseInt(e.target.tickets.value);
    if (requestedTickets > 0 && requestedTickets <= availableTickets) {
      const newAvailableTickets = availableTickets - requestedTickets;
      const newBookedTickets = bookedTickets + requestedTickets;

      setAvailableTickets(newAvailableTickets);
      setBookedTickets(newBookedTickets);

      const bookingDetails = {
        eventId: event.id,
        eventName: event.name,
        bookedTickets: newBookedTickets,
        date: event.date,
        time: event.time,
        venue: event.venue,
      };
      localStorage.setItem(
        `booking_${event.id}`,
        JSON.stringify(bookingDetails)
      );
    } else {
      alert("Invalid ticket quantity");
    }
  };

  return (
    <div className="event-details">
      <h1>{event.name}</h1>
      <p>
        {event.date} at {event.time}
      </p>
      <p>Venue: {event.venue}</p>
      <p>Tickets Available: {availableTickets}</p>
      <form onSubmit={handleBooking}>
        <label>
          Number of Tickets:
          <input
            type="number"
            name="tickets"
            min="1"
            max={availableTickets}
            required
          />
        </label>
        <button type="submit">Book Tickets</button>
      </form>
      {bookedTickets > 0 && (
        <p className="success-message">
          You have successfully booked {bookedTickets} tickets!
        </p>
      )}
      <Link className="back-link" to="/">
        Back to Events
      </Link>
    </div>
  );
}

export default EventDetails;
