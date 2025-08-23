// ide beimportalunk a komponenseket
import Timetable from "../components/Timetable";
import Button from "../components/Button";
import PopupForm from "../components/Popupform";

// elvileg lathatosag miatt fontos hogy export default legyen az összes importalando fg előtt
export default function Events() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sziasztoooook! 🎉</h1>
      <p>This is the Events page. If you can see this, React is working.</p>
      <p>Akkor itt kiserleteztem a frontenddel. Lathatjatok itt kulonbozo komponenseket: gombok; popupform, naptar ...</p>
      <p> Meg egyaltalan nem kötöttem hozzá a backendet, szoval logikailag nem fog mukodni semmi, de mint maga a komponensek azok mukodnek juhuu</p>
      <p> Kb megértettem hogy a frontend hogy működik, a forráskódban látjátok majd az összes olyan fájlt ami kelleni fog illetve valami kis peldakodot is mindenhez</p>
      <div style={{marginBottom: "20px"}}></div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <PopupForm />
      <Timetable />

    </div>
  );
}
