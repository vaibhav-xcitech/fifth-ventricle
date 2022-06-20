import React from 'react'

const Page = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: "55px" }}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Page
