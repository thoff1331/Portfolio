import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/NavBar/navBar";

function App() {
  return (
    <div>
      <Navbar />
      <HashRouter>{routes}</HashRouter>
    </div>
  );
}

export default App;
