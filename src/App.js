import NavBar from "./HomePage/Components/NavBar"
import Footer from "./HomePage/Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
