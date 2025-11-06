// ide beimportalunk a komponenseket
import Timetable from "../components/Timetable";

// elvileg lathatosag miatt fontos hogy export default legyen az összes importalando fg előtt
export default function FullCalendar() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Csapat full-beosztás🎉</h1>
      <p> Itt látható az egész csapat beosztása. Váltogatni lehet havi vagy napi nézetek között.</p>
      <div style={{marginBottom: "20px"}}></div>
      <Timetable />

    </div>
  );
}
