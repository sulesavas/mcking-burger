import React from 'react'
import { Burger, BreadBottom, BreadTop, Salad, Cheese, Meat } from './Hamburger.styles'

function Hamburger({ saladCount, cheeseCount, meatCount }) {

    const GetSalad = () => {
        let salads = [];
        for (var i = 0; i < saladCount; i++) {
            salads.push(<Salad />);
        }
        return salads;
    }


    const GetCheese = () => {
        let cheeses = [];
        for (var i = 0; i < cheeseCount; i++) {
            cheeses.push(<Cheese />);
        }
        return cheeses;
    }

    const GetMeat = () => {
        let meats = [];
        for (var i = 0; i < meatCount; i++) {
            meats.push(<Meat />);
        }
        return meats;
    }


    return (
        <div className="col">
            <Burger>
                <BreadTop />
                <GetSalad />
                <GetCheese />
                <GetMeat />
                <BreadBottom />
            </Burger>
        </div>
    )
}

export default Hamburger
