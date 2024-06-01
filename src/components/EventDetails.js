import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography, TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getEventListById, updateEventListById } from "../utils/method";
import { GET_EVENT_DETAILS, UPDATE_EVENT_DETAILS } from "../utils/constant";

const EventDetailsContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: 20,
  border: '1px solid #ddd',
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
}));

const EventTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 20,
  fontSize: '2em',
  color: '#333',
}));

const EventInfo = styled(Typography)(({ theme }) => ({
  margin: '10px 0',
  color: '#666',
}));

const Form = styled('form')(({ theme }) => ({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormLabel = styled(Typography)(({ theme }) => ({
  marginBottom: 10,
  fontSize: '1em',
  color: '#444',
}));

const SuccessMessage = styled(Typography)(({ theme }) => ({
  marginTop: 20,
  color: 'green',
  fontSize: '1.2em',
}));

const BackLink = styled(RouterLink)(({ theme }) => ({
  display: 'inline-block',
  marginTop: 20,
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: 5,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

function EventDetails() {
  const [eventDetails, setEventDetails] = useState({});
  const [availableTickets, setAvailableTickets] = useState("");
  const [bookingDetails, setBookingDetails] = useState("")
  console.log("bookingDetails", bookingDetails)

  const { id } = useParams();

  useEffect(() => {
    getEventListById(GET_EVENT_DETAILS, { id })
      .then(responseData => {
        if (responseData) {
          setEventDetails(responseData);
        } else {
          console.error('Failed to fetch data.');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, [id]);


  const handleBooking = (e) => {
    e.preventDefault();
    const requestedTickets = parseInt(e.target.tickets.value)
    updateEventListById(UPDATE_EVENT_DETAILS, { id }, {}, {
      ...eventDetails, availableTickets: eventDetails?.availableTickets - availableTickets
    }).then((res) => {
      if (res) {
        toast.success(`Successfully booked ${requestedTickets} tickets!`);
      } else if (requestedTickets > availableTickets) {
        toast.error("Requested tickets exceed available tickets.");
      } else {
        toast.error("Invalid ticket quantity.");
      }
    }
    )
  };

  const handleTicketCounterChange = (val) => {
    setAvailableTickets(val);
  };


  return (
    <EventDetailsContainer>
      <ToastContainer />
      <EventTitle>{eventDetails.name}</EventTitle>
      <EventInfo>
        {eventDetails.date} at {eventDetails.time}
      </EventInfo>
      <EventInfo>Venue: {eventDetails.venue}</EventInfo>
      <EventInfo>Tickets Available: {eventDetails?.availableTickets - availableTickets}</EventInfo>
      <Form onSubmit={handleBooking} >
        <FormLabel>Number of Tickets:</FormLabel>
        <TextField
          fullWidth
          disabled={availableTickets === 0}
          InputProps={{ inputProps: { min: 1 } }}
          inputMode="numeric"
          name="tickets"
          onChange={({ target: { value } }) => handleTicketCounterChange(+value)}
          value={availableTickets}
        />
        <Button disabled={!availableTickets} type="submit" variant="contained" color="primary">Book Tickets</Button>
      </Form>
      <BackLink to="/">Back to Events</BackLink>
    </EventDetailsContainer>
  );
}

export default EventDetails;
