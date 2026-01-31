import React, { useState, useEffect } from "react";
import useCounter from "../Utilities/use-counter";

import './Decrement.css';

function Decrement(){
    let counter = useCounter(false);
    
    return <div class="counter-value Decrement">{ counter }</div>
}

export default Decrement;