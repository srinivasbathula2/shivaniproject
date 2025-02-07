
import { useSelector } from "react-redux";

function Orders() {
    //purchase details from store
    const purchaseDetails = useSelector(state => state.purchasedetails);

    const orderList = purchaseDetails.map((order, index) => (
        <li key={index}>
            Order Date:{order.date}
            <p>Total Amount:${order.totalPrice.toFixed(2)}</p>
           <ul>
            {purchaseDetails.map((Item, index) => (
                <li key={index}>
                    {Item.name}-{Item.price}-{Item.quantity}
                    </li>
                    ))}
                    </ul>
                    </li>
                
    ))

    return (
        <>
            <h1>Orders</h1>
            {purchaseDetails.length >0 ? (
                <div>
                <ul>{orderList}</ul>
                </div>
            ) : (
                
                <p>No order history available</p>
            )}
        </>
    );
}

export default Orders;
