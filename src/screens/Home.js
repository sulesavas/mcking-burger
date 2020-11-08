import React, { useState } from 'react'
import Hamburger from '../components/Order/Hamburger';
import Choice from '../components/Order/Choice';

function Home() {

    const [saladCount, setSaladCount] = useState(1);

    const [cheeseCount, setCheeseCount] = useState(1);

    const [meatCount, setMeatCount] = useState(1);

    return (
        <div className="row">
            <Hamburger
                saladCount={saladCount}
                cheeseCount={cheeseCount}
                meatCount={meatCount}

            />
            <Choice
                saladCount={saladCount}
                setSaladCount={setSaladCount}
                cheeseCount={cheeseCount}
                setCheeseCount={setCheeseCount}
                meatCount={meatCount}
                setMeatCount={setMeatCount}


            />
        </div>
    )
}

export default Home
