import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function MilkItems()
{let  milk=useSelector(state =>state.products.milk);
    let dispatch=useDispatch();
        let milkItems=milk.map((item,index)=>
            <li key={index} className="col-12 col-md-4 mb-4">
        <div className="card shadow-sm">
          <img src={item.image} alt={item.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <button 
              className="btn btn-success"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    );
  
    return (
      <div className="container my-5">
        <h1 className="text-center mb-4">Milk Items</h1>
        <ul className="row list-unstyled">
          {milkItems}
        </ul>
      </div>
    );
}
export default MilkItems;