import EventDetails from "./components/EventDetails";
import EventList from "./components/EventList";
import events from "../src/components/common/events";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList events={events} />} />
      <Route path="/event/:id" Component={EventDetails} />
    </Routes>
  );
}

export default App;
