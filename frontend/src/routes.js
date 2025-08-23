// ez a routes.js fájl
// felelős azért hogy a mi alkalmazásunkban lévő különböző oldalakat kezelje
// ide kell beilleszteni a létrejött oldalakat (amik pages könyvtárban vannak)


import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
// import Login from "./pages/login";
import Admin from "./pages/Admin";
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

      {/* Default homepage (optional) */}
      <Route path="/" element={<Events />} />
    </Routes>
  );
}

export default AppRoutes;
