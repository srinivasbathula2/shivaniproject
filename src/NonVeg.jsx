import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg()
{  let nonveg =useSelector(state =>state.products.nonVeg);
    let dispatch=useDispatch();
        let nonvegItems=nonveg.map((item,index)=>
            <li key={index}>
                {item.name} - {item.price}
                <button onClick={()=>dispatch(addToCart(item))}>addToCart</button>
            </li>)
    return(
    <>
    <h1>NonVeg Items</h1>
    <ul>{nonvegItems}</ul>
    </>
)
}
export default NonVeg;