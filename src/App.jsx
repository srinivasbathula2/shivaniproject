import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import MilkItems from "./MilkItems";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import NonVeg from "./NonVeg.JSX";
import "./App.css";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";
import { logout } from "./Store";

function App()
{
  const cart=useSelector(state=>state.cart)
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  let{isAuthenticated, user}= useSelector(state => state.auth)
  return(
<>
<BrowserRouter>
<Link to="/home" className="name">Home</Link>
<Link to="/veg" className="name">Veg</Link>
<Link to="/nonveg" className="name">NonVeg</Link>
<Link to="/milk" className="name">MilkItems</Link>
<Link to="/orders" className="name">Orders</Link>
<Link to="/aboutus" className="name">Aboutus</Link>
<Link to="/contactus" className="name">ContactUs</Link>
<Link to="/cart" className="name">Cart<span>{totalItems}</span></Link>

{isAuthenticated?(
  <>
  <span className="welcome">welcome,{user}!</span>
    <button onClick={()=>dispatchEvent(logout())}className="logout.button">logout</button>
  </>
):( 
  <link to="/login" className="myclass">Signin</link>
)}
<nav></nav>

<Routes> 
  <Route path="/home" element={<Home/>}/>
  <Route path="/veg" element={<Veg/>}/>
  <Route path="/nonveg" element={<NonVeg/>}/>
  <Route path="/milk" element={<MilkItems/>}/> 
  <Route path="/orders" element={<Orders/>}/>
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="*" element={<NotFound/>}/>

</Routes>
</BrowserRouter>
<NotFound/>
</>
  )
}
export default App;