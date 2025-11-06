// ez a routes.js fájl
// felelős azért hogy a mi alkalmazásunkban lévő különböző oldalakat kezelje
// ide kell beilleszteni a létrejött oldalakat (amik pages könyvtárban vannak)


import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import FullCalendar from "./pages/FullCalendar";
import MyCalendar from "./pages/MyCalendar";
import Vacation from "./pages/Vacation";
// import Profile from "./pages/profile";

function AppRoutes() {
  return (
    <Routes>
      {/* Example pages */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}

      {/* Events page */}
      <Route path="/events" element={<Events />} />
      {/* Admin page */}
      <Route path="/admin" element={<Admin />} />

      {/* Profile page */}
      <Route path="/login" element={<Login />} />

      {/* Full Calendar page */}
      <Route path="/fulltimetable" element={<FullCalendar />} />

      {/* My Calendar page */}
      <Route path="/mytimetable" element={<MyCalendar />} />

      {/* Vacation/Days Away page */}
      <Route path="/vacation" element={<Vacation />} />
      {/* Clockify page
      <Route path="/clockify" element={<Clockify />} /> */}

      {/* Default homepage (optional) */}
      <Route path="/" element={<Events />} />
    </Routes>
  );
}

export default AppRoutes;
