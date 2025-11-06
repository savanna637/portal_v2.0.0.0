// alap alkalmazas/oldal struktura
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes";
import Footer from "./components/Footer"; // <-- import the footer component

function App() {
  return (
    <BrowserRouter>
      {/* Full-page layout with footer */}
      <div className="flex flex-col min-h-screen">
        {/* Sidebar + main content */}
        <main className="flex-grow">
          <Sidebar>
            <AppRoutes />
            <Footer />
          </Sidebar>
        </main>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
