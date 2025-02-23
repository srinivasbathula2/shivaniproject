import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
    // Use the useSelector hook to access purchased details from the Redux store
    const purchasedDetails = useSelector(state => state.purchasedetails);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">📜 Order History</h2>

            {purchasedDetails.length === 0 ? (
                <div className="alert alert-warning text-center" role="alert">
                    No orders placed yet. Start shopping! 🛍️
                </div>
            ) : (
                <div className="row">
                    {purchasedDetails.map((order, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">🗓 Order Date: <span className="text-primary">{order.purchasedate}</span></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Total Amount After Discount: ₹{order.totalPrice}</h6>

                                    <h6 className="mt-3">📦 Items:</h6>
                                    <ul className="list-group">
                                        {order.items.map((item, idx) => (
                                            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>
                                                    {item.name} - ₹{item.price} x {item.quantity}
                                                </span>
                                                <span className="badge bg-secondary">{item.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;
