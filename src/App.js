import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './pages/Landing';
import Menu from './pages/Menu';
import Schedule from './pages/Schedule';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (<>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='' element={<LandingPage />} />
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
    </Routes>
  </BrowserRouter>
  </>);
}

export default App;
