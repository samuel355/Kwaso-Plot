import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
