import {Routes,Route} from 'react-router-dom'
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { AddOffer } from './components/recruiters/dashboard/AddOffer';
import { EditOffer } from './components/recruiters/dashboard/EditOffer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ListOffers } from './components/offers/ListOffers';
import { Navbar } from './components/layouts/Navbar';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile';
import AllPostulants from './pages/AllPostulants';
import { MyApplications } from './components/postulants/dashboard/MyApplications';
import MyOfferts from './components/recruiters/dashboard/MyOfferts';


function App() {

  return (
    <Provider store={ store }>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listOffers" element={< ListOffers/>} />
        <Route path="/addOffer" element={<AddOffer />} />
        <Route path="/editOffer/:id" element={<EditOffer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allPostulants" element={<AllPostulants />} />
        <Route path="/postulant/:id" element={<Profile />} />
        <Route path="/myApplications" element={<MyApplications />} />
        <Route path="/myOffers" element={<MyOfferts />} />
        {/* <Route path="/perfil" element={<Profile />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;
