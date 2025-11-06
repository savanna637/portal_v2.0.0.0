import { useState } from "react";
import Timetable from "../components/Timetable";
import Button from "../components/Button";
import PopupForm from "../components/Popupform";

export default function MyCalendar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      {/* Buttons */}
      <Button onClick={() => setShowPopup(true)}>Beosztás Feltöltése</Button>
      <Button>Szabadság Kérelem</Button>
      <Button onClick={() => setShowPopup(true)}>Beosztás változtatás kérelem</Button>

      {/* Show Popup only when first button is clicked */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <Timetable />
    </div>
  );
}
