import React from 'react'
import { styled } from '@mui/material/styles';
import { Button as MUIButton } from "@mui/material";

const Button = ({ children, type, onClick }) => {
    return (
        <button className="d-button" type={type} onClick={onClick}>
            {children}
        </button>
    )
}

const MainButton = styled(MUIButton)({
    // marginTop: '40px',
    // padding: '7px 15px',
    // borderRadius: '25px',
    // backgroundColor: '#ffe500',
    // color: 'black',
    // border: '3px solid #2f3538',
    // fontSize: '24px',
    // textTransform: 'capitalize',
    // boxShadow: '-3px -3px 3px rgb(255 255 255 / 8%), 5px 5px 3px rgb(0 0 0 / 24%)',
    // '&:hover': {
    //     backgroundColor: '#f8e42f',
    // }

    backgroundImage: "linear-gradient(to right, #4EBBCE 0%, #FFE500  51%, #4EBBCE  100%)",
    marginTop: '35px',
    padding: '7px 15px',
    textAlign: "center",
    transition: "0.5s",
    fontSize: '20px',
    backgroundSize: "200% auto",
    color: "black",
    border: "black",
    borderRadius: "25px",
    display: "Block",
    '&:hover': {
        backgroundPosition: "right center",
        color: "White",
        textDecoration: "none"
    }

});

export { MainButton };

export default Button
