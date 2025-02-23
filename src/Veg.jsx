import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {  
    let veg = useSelector(state => state.products.veg);
    let dispatch = useDispatch();

    // Pagination State
    const perPage = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = Math.ceil(veg.length / perPage);

    // Ensure page number stays within valid range
    const validPageNumber = Math.max(1, Math.min(pageNumber, totalPages || 1));

    // Calculate Items for Current Page
    const pageStartIndex = (validPageNumber - 1) * perPage;
    const currentItems = veg.slice(pageStartIndex, pageStartIndex + perPage);

    return (
        <div className="container mt-4 text-center"> {/* Center entire section */}
            <h1 className="mb-4">Veg Items</h1>

            {/* Items List */}
            <div className="row justify-content-center"> {/* Center cards */}
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                            <div className="card shadow-sm text-center" style={{ width: "18rem" }}> {/* Center text in card */}
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
                        </div>
                    ))
                ) : (
                    <p className="text-center">No Veg Items Available</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-3 d-flex justify-content-center">
                    <button
                        onClick={() => setPageNumber(validPageNumber - 1)}
                        className="btn btn-primary mx-2"
                        disabled={validPageNumber === 1}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setPageNumber(index + 1)}
                            className={`btn ${validPageNumber === index + 1 ? "btn-dark" : "btn-outline-dark"} mx-1`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setPageNumber(validPageNumber + 1)}
                        className="btn btn-primary mx-2"
                        disabled={validPageNumber === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Veg;
