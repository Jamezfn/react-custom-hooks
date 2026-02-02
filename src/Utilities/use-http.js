import { useState } from "react";

function useHttp(url, method, body, action) {
    let [errorMessage, setErrorMessage] = useState(null);

    function sendHTTPRequest(){
        fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : null
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Something went wrong. Please try again later");
            }
            let data =  res.json();
            action(data);
        })
        .catch((error) => {
            setErrorMessage(error.message);
        })
    }

    return [errorMessage, sendHTTPRequest];
}

export default useHttp;