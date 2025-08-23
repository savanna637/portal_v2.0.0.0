// alap alkalmazas/oldal struktura
// amik itt vannak ez a default layout

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
