import { useState } from "react";

const Counter = (props) => {
    const {upperLimit, lowerLimit} = props;
    let [count, setCount] = useState(lowerLimit)
    const increasingHandler = () => {
        if(count < upperLimit){
            setCount(count + 1);
        };
    }

    const decreasingHandler = () => {
        if(count > lowerLimit){
            setCount(count - 1);
        };
    }

    return (
        <div>
            <p>My current count is: {count}</p>
            <button onClick={increasingHandler}>Aumentar</button>
            <button onClick={decreasingHandler}>Disminuit</button>
        </div>)
}

export default Counter;