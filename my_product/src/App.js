import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/index'
import 'bootstrap/dist/css/bootstrap.css';
import CharDetails from './pages/CharDetail';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header overflow-hidden">
      <Navbar />
        <h1 className='text-center my-4'>Rick and Morty Show App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character_details/:characterId" element={<CharDetails />} />
        <Route>404 not found</Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
