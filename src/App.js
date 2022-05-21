import {Routes,Route} from 'react-router-dom'
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { AddOffer } from './components/offers/AddOffer';
import { EditOffer } from './components/offers/EditOffer';
import { Navbar } from './components/ux/Navbar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ListOffers } from './components/offers/ListOffers';

function App() {
  return (
    <Provider store={ store }>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/listOffers" element={< ListOffers/>} />
        <Route path="/addOffer" element={<AddOffer />} />
        <Route path="/editOffer/:id" element={<EditOffer />} />
      </Routes>
    </Provider>
  );
}

export default App;
