// NAVIGACIOS LINKEK AMIKET AZ OLDAL FENTI RÉSZÉN LÁTJUK

// még nem tudom hogy szamit e hogy js kiterjesztesu a fajl vagy nem
// elvileg nem szamit egyaltalan
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/events">Events</Link>
      <Link to="/fulltimetable">Timetable</Link>
    </nav>
  );
}

export default Navbar;  