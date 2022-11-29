import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import Edit from './pages/Edit';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
