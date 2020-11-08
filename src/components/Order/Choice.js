import React from 'react';
import { Link } from 'react-router-dom';

function Choice({ saladCount, setSaladCount, cheeseCount, setCheeseCount, meatCount, setMeatCount }) {

    const burgerPrice = {
        base: 4.0,
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
    };

    return (
        <div className="col mb-5">
            <h5 className="text-center my-5">Current Price: {(burgerPrice.base + (burgerPrice.cheese * cheeseCount) + (burgerPrice.salad * saladCount) + (burgerPrice.meat * meatCount)).toFixed(2)}$</h5>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Salad ({burgerPrice.salad}$):</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control" id="salad" min="0" value={saladCount} onChange={(event) => setSaladCount(event.target.value)} />
                </div>
                <label className="col-sm-4 col-form-label">Total Price: {(burgerPrice.salad * saladCount).toFixed(2)}$</label>
            </div>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Cheese ({burgerPrice.cheese}$):</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control" id="cheese" min="0" value={cheeseCount} onChange={(event) => setCheeseCount(event.target.value)} />
                </div>
                <label className="col-sm-4 col-form-label">Total Price: {(burgerPrice.cheese * cheeseCount).toFixed(2)}$</label>
            </div>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Meat ({burgerPrice.meat}$):</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control" id="meat" min="1" value={meatCount} onChange={(event) => setMeatCount(event.target.value)} />
                </div>
                <label className="col-sm-4 col-form-label">Total Price: {(burgerPrice.meat * meatCount).toFixed(2)}$</label>
            </div>
            <div className="text-center mt-5"><Link to="/confirm"><button className="btn btn-success" type="button">Order Now</button></Link></div>
        </div>
    )
}

export default Choice
