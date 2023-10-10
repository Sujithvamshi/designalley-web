import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login/Login";


function App() {
    return (
      <div className="min-h-screen w-screen overflow-x-scroll text-black">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
