import { useDispatch, useSelector } from "react-redux";
import { addpurchasedetails, clearcart, decrement, increment, remove } from "./Store";
import { useState } from "react";

function Cart() {
    let dispatch = useDispatch();
    let cartObjects = useSelector(state => state.cart);

    let finalItems = cartObjects.map((item, index) => (
        <li key={index}>
            {item.name} &nbsp; - &nbsp; {item.price} &nbsp; &nbsp;
            <button onClick={() => dispatch(increment(item))}>+</button> &nbsp;&nbsp;&nbsp;
            {item.quantity} &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(decrement(item))}>-</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(remove(item))}>Remove</button>
            <br /><br />
        </li>
    ));

    const purchasedate = new Date().toDateString();
    
    let totalAmount = cartObjects.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    let [showDiscount, setShowDiscount] = useState(false);
    let [discountPercentage, setDiscountpercentage] = useState(0);
    let [cuponCode, setCuponcode] = useState("");
    let [cupondiscountPercentage, setcuponDiscountpercentage] = useState(0);
    
    let handilingcuponPersentage = () => {
        switch (cuponCode.toUpperCase()) {
            case "CUPON10":
                setcuponDiscountpercentage(10);
                break;
            case "CUPON20":
                setcuponDiscountpercentage(20);
                break;
            case "CUPON30":
                setcuponDiscountpercentage(30);
                break;
            case "CUPON40":
                setcuponDiscountpercentage(40);
                break;
            case "CUPON50":
                setcuponDiscountpercentage(50);
                break;
            default:
                alert("Invalid coupon code");
                setcuponDiscountpercentage(0);
                break;
        }
        setCuponcode(""); // Clear coupon input after applying
    };

    let discountAmount = totalAmount * discountPercentage / 100;
    let totalAfterDiscount = totalAmount - discountAmount;
    let cupondiscountamount = totalAfterDiscount * cupondiscountPercentage / 100;
    let finalAmount = totalAfterDiscount - cupondiscountamount;

    let handelpurchasedetails = () => {
        const purchasedetailsobject = { items: [...cartObjects], totalAmount, purchasedate };
        dispatch(addpurchasedetails(purchasedetailsobject));
        dispatch(clearcart());
    }

    return (
        <>
            {finalItems.length > 0 ?
                <div>
                    <ul> {finalItems} </ul>
                    <p>Total Price: {totalAmount}</p>

                    {showDiscount && (
                        <div>
                            <p>Discount Applied: {discountPercentage}%</p>
                            <p>Discount Amount: {discountAmount}</p>
                            {cupondiscountPercentage > 0 && (
                                <div>
                                    <p>Coupon Discount: {cupondiscountPercentage}%</p>
                                    <p>Coupon Discount Amount: {cupondiscountamount}</p>
                                </div>
                            )}
                        </div>
                    )}
                    <p>Net Amount: {finalAmount}</p>

                    <button onClick={() => { setDiscountpercentage(10), setShowDiscount(true) }}>Apply 10%</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => { setDiscountpercentage(20), setShowDiscount(true) }}>Apply 20%</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => { setDiscountpercentage(30), setShowDiscount(true) }}>Apply 30%</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                    <input type="text" value={cuponCode} onChange={(e) => setCuponcode(e.target.value)} placeholder="Enter coupon code" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={handilingcuponPersentage}>Apply coupon code</button>
                    
                    <button onClick={handelpurchasedetails}> Complete Purchase</button>
                </div>
                :
                <p>Your Cart is Empty</p>
            }
        </>
    );
}

export default Cart;