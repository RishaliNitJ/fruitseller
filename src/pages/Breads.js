import React from 'react';
import { useStateValue } from '../components/StateProvider';
import Snackbar from "@mui/material/Snackbar";
import './Product.css'

function Breads({ id, image, category, title, description, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const [open, setOpen] = React.useState(false);

    const addtoCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                category: category,
                title: title,
                description: description,
                price: price,
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

    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="rounded position-relative fruite-item">
        <div className="fruite-img" style={{ height: '300px', overflow: 'hidden' }}>
            <img
                src={image}
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'cover' }}
                alt={title}
            />
        </div>
        <div
            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
            style={{ top: 10, left: 10 }}
        >
            {category}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>{title}</h4>
            <p className="product-description">{description}</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">{price}/ Pack</p>
                <button
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                    onClick={addtoCart}
                >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                </button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={title + " Added to the Cart"}
            />
        </div>
    </div>
</div>

    );
}

export default Breads;
