// ide beimportalunk a komponenseket
import Timetable from "../components/Timetable";

// elvileg lathatosag miatt fontos hogy export default legyen az összes importalando fg előtt
export default function Vacation() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Csapat szabadságok🎉</h1>
      <p> Itt látható az egész csapat szabadságainak naptára. Váltogatni lehet havi vagy napi nézetek között.</p>
      <div style={{marginBottom: "20px"}}></div>
      <Timetable />

    </div>
  );
}
