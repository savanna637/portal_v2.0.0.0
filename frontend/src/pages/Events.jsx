import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import huLocale from "@fullcalendar/core/locales/hu";
import { getEvents } from "../api_routes/events";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => {
      const formatted = data.map((event) => ({
        title: event.title,
        start: event.start,
        color:
          event.type === "holiday" ? "red" : event.type === "birthday" ? "green" : "blue",
        extendedProps: { eventType: event.type },
      }));
      setEvents(formatted);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ESEMÉNY NAPTÁR</h1>
      <p className="mb-6">
        Itt láthatóak a csapaton belüli ünnepek / munkaszüneti napok havi nézetben.
      </p>
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
        eventContent={(arg) => {
          let imgSrc = "/static/img/default.png";

          if (arg.event.extendedProps.eventType === "birthday") {
            imgSrc = "/static/img/cake1.png";
          } else if (arg.event.extendedProps.eventType === "holiday") {
            imgSrc = "/static/img/holidays.png";
          }

          return (
            <div className="flex items-center space-x-2">
              <strong style={{ color: arg.event.color || "black" }}>
                {arg.event.title}
              </strong>
              <img
                src={imgSrc}
                alt="event icon"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
