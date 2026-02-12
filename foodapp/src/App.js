//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import FoodList from './components/FoodList';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import SearchFood from './components/SearchFood';
import Contact from './components/Contact';
import AddFood from './components/AddFood';
import { Routes,Route } from 'react-router-dom';
import FoodListClient from './components/FoodListClient';
import AddOrder from './components/AddOrder';
import Billing from './components/Billing';
import SearchFoodClient from './components/SearchFood';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import NavClient from './components/NavClient';

function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/navadmin" element={<Nav/>}/>
        <Route path="/navclient" element={<NavClient/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addfood" element={<AddFood/>}/>
        <Route path="/foodlist" element={<FoodList/>}/>
        <Route path="/delfood" element={<DeleteFood/>}/>
        <Route path="/updfood" element={<UpdateFood/>}/>
        <Route path="/searchfood" element={<SearchFood/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/foodlistclient" element={<FoodListClient/>}/>
        <Route path="/sfoodclient" element={<SearchFoodClient/>}/>
        <Route path="/addfood" element={<AddOrder/>}/>
        <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </div>
  );
}
export default App;
