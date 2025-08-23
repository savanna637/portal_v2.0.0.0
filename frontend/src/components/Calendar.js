import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // ez a pelda kod csak
    fetch("http://127.0.0.1:5000/schedules/events") // Flask API
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((event) => ({
          title: event.title,
          start: event.start,
          color: event.color || "green",
          extendedProps: { type: event.type },
        }));
        setEvents(formatted);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Esemény naptár</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="hu"
        firstDay={1}
        events={events}
        eventContent={(arg) => {
          // ikon hozzáadása
          let emoji = "📅";
          if (arg.event.extendedProps.type === "birthday") emoji = "🎂";
          if (arg.event.extendedProps.type === "holiday") emoji = "🎉";

          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "6px" }}>{emoji}</span>
              <b>{arg.event.title}</b>
            </div>
          );
        }}
      />
    </div>
  );
}
