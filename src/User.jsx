import React, {useState, useEffect} from "react";

export default function User(){
    const [count,setState] = useState(1);

    useEffect(() => {
        console.log(count);
    },[count == 5])

    return(
        <React.Fragment>
            <h1>Count From User : {count}</h1>
            <button className="btn" onClick={() => setState(count + 1)}>Click</button>
        </React.Fragment>
    )
}