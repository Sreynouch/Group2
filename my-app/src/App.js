import {Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import SiemReab from './pages/SiemReab';
import PhnomPenh from './pages/PhnomPenh';

function App() {
  return (
  <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage/>}/>
          <Route path='/siemreap' element={<SiemReab/>}/>
          <Route path='/phnompenh' element={<PhnomPenh/>}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
        <Route path="/about" element={<About />}/>
        <Route path='/login'>
          <Route index element={<Login />} />
          <Route path=':id' element={<Profile />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
  </div>
  );
 
}

export default App;
