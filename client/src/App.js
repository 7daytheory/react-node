import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Add from "./pages/add/Add"
import Shoes from "./pages/shoes/Shoes"
import Update from './pages/update/Update';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Shoes />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
