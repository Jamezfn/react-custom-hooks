import { useEffect, useState } from "react";

function useCounter(increment = true){
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (increment){
                setCounter(counter => counter + 1);
            } else {
                setCounter(counter => counter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;