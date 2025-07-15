import React from 'react';
import { useStateValue } from '../components/StateProvider';
import Snackbar from "@mui/material/Snackbar";
import './Product.css';

function AnotherCardLast({ id, image, title, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const [open, setOpen] = React.useState(false);

    const addtoCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                image,
                title,
                price,
            },
        });
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.min(Math.max(rating, 0), totalStars);
        const emptyStars = totalStars - filledStars;
        
        return (
            <>
                {Array(filledStars).fill().map((_, i) => (
                    <i key={`filled-${i}`} className="fas fa-star text-primary" />
                ))}
                {Array(emptyStars).fill().map((_, i) => (
                    <i key={`empty-${i}`} className="fas fa-star" />
                ))}
            </>
        );
    };

    return (
        <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
            <img
                src={image}
                className="img-fluid rounded"
                alt=""
            />
            <div className="py-4">
                <a href="#" className="h5">
                    {title}
                </a>
                <div className="d-flex my-3">
                            {renderStars(rating)}
                        </div>
                <h4 className="mb-3">{price} ₹</h4>
                <button
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={addtoCart}
                        >
                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                            cart
                        </button>
                        <Snackbar
                            open={open}
                            autoHideDuration={5000}
                            onClose={handleClose}
                            message={`${title} Added to the Cart`}
                        />
            </div>
        </div>
    </div>
    );
}

export default AnotherCardLast;
