import React from 'react'

function Temp({ value }) {
    console.log("Temp rendered");
    return (
        <div>
            Hello world i am child component the value is {value}
        </div>
    )
}

export default React.memo(Temp);
