import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlideShow from './pages/SlideShow';
import Home from './pages/Home';
import Pagenotfound from './pages/Pagenotfound';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/gallery/:id' element={<SlideShow/>}/>
      <Route
                    path="*"
                    element={<Pagenotfound />}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
