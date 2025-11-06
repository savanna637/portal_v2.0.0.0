import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar({ children }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: "Profile", to: "/profile", icon: "👤" },
    { name: "Admin", to: "/admin", icon: "⚙️" },
    { name: "Events", to: "/events", icon: "🎉" },
    { name: "Full Beosztás", to: "/fulltimetable", icon: "📅" },
    { name: "Saját Beosztás", to: "/mytimetable", icon: "📅" },
    { name: "360 fokos értékelés", to: "/360feedback", icon: "📅" },
    { name: "My Clockify", to: "/clockify", icon: "📅" },
    { name: "Login", to: "/login", icon: "🔑" },
    { name: "Vacation", to: "/vacation", icon: "🏖️" }
  ];

  const sidebarWidth = collapsed ? "80px" : "240px";

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white vh-100 d-flex flex-column position-fixed p-3 shadow"
        style={{ width: sidebarWidth, transition: "width 0.3s" }}
      >
        {/* Logo + Collapse Button */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          {!collapsed && (
            <span className="fs-5 fw-bold">TT Portál</span>
          )}
          <button
            className="btn btn-sm btn-outline-light ms-auto"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        {/* Nav Links */}
        <ul className="nav nav-pills flex-column mb-auto">
          {links.map((link) => (
            <li className="nav-item" key={link.to}>
              <Link
                to={link.to}
                className={`nav-link d-flex align-items-center text-white ${
                  location.pathname === link.to ? "active bg-primary" : "text-white-50"
                }`}
              >
                <span className="me-2">{link.icon}</span>
                {!collapsed && link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile Section at Bottom */}
        <div className="mt-auto pt-3 border-top">
          <div className="d-flex align-items-center">
            <img
              src="/profile-pic.png"
              alt="profile"
              className="rounded-circle me-2"
              width="36"
              height="36"
            />
            {!collapsed && <span>Üdv, Anna</span>}
          </div>
          {!collapsed && (
            <Link to="/logout" className="d-block mt-2 text-decoration-none text-white-50">
              Kijelentkezés
            </Link>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: sidebarWidth, transition: "margin-left 0.3s" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
