import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Veg()
{  
    let veg =useSelector(state =>state.products.veg);
    let dispatch=useDispatch();
    let vegItems=veg.map((item,index)=>
        <li key={index}>
            {item.name} - {item.price} 
            <img src={item.image}></img>
            <button onClick={()=>dispatch(addToCart(item))}>addToCart</button>
        </li>
    )
    
    return(
    <>
    <h1>Veg Items</h1>
    <ul>{vegItems}</ul>
    
    </>
)
}
export default Veg;