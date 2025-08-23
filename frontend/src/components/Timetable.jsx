// ORAREND MEGJELENITŐ KOMPONENS
// LEHET HASZNÁLNI MÁS OLDALAKON IS

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import huLocale from "@fullcalendar/core/locales/hu";

export default function Timetable({ eventsUrl = "/events" }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(eventsUrl)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err.error || "Error fetching events");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const formatted = data.map((event) => ({
            title: event.title,
            start: event.start,
            color:
              event.color || (event.type === "holiday" ? "red" : "green"),
            allDay: true,
            extendedProps: { eventType: event.type },
          }));
          setEvents(formatted);
        }
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, [eventsUrl]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">NAPTÁR KOMPONENS</h1>
      <p1>Ez a naptár a /events végpontról tölti be az eseményeket. De mashol is fel lehet hasznilni a komponenst</p1>


      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={huLocale}
        firstDay={1}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        events={events}
        eventContent={(arg) => (
          <div>
            <strong style={{ color: arg.event.color || "black" }}>
              {arg.event.title}
            </strong>
          </div>
        )}
      />
    </div>
  );
}
