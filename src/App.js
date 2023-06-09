import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ProcedCheck from './Pages/ProcedCheck/ProcedCheck';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/Header/NotFound/NotFound';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/service/:serviceId' element={<ServiceDetails/>}/>
        <Route path='/about' element ={<About></About>}/>
        <Route path='/login' element ={<Login></Login>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/procedcheck' element={
          <RequiredAuth>
            <ProcedCheck></ProcedCheck>
          </RequiredAuth>
        }></Route>
        <Route path='/add-service' element={
          <RequiredAuth>
            <AddService/>
          </RequiredAuth>
        }></Route>
        <Route path='/manage-service' element={
          <RequiredAuth>
            <ManageService/>
          </RequiredAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
