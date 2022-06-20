import React from 'react'
import Temp from './Temp'
const Contact = () => {
    const [state, setState] = React.useState(0);
    const [state2, setStat2] = React.useState(0);

    return (
        <>
            <div>
                Contact
                <Temp value={state} />
                <button onClick={() => setState(state + 1)}>
                    Click me
                </button>
                <p>
                    The value of second state is---
                    {state2}
                </p>
                <button onClick={() => setStat2(state2 + 1)}>
                    Click me2
                </button>
            </div>
        </>
    )
}

export default Contact
