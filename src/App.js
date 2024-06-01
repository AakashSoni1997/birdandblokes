import EventDetails from "./components/EventDetails";
import EventList from "./components/EventList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
      <Route path="/event/:id" element={<EventDetails />} />
    </Routes>
  );
}

export default App;
