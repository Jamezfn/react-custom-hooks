import React, { useState, useEffect } from "react";
import useCounter from "../Utilities/use-counter";

import './Increment.css';


function Increment(){
    let counter = useCounter();

    return <div class="counter-value increment">{ counter }</div>
}

export default Increment;