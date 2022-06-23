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
    marginTop: '40px',
    padding: '20px 55px',
    borderRadius: '25px',
    backgroundColor: '#ffe500',
    color: 'black',
    border: '3px solid #2f3538',
    fontSize: '24px',
    textTransform: 'capitalize',
    boxShadow: '-3px -3px 3px rgb(255 255 255 / 8%), 5px 5px 3px rgb(0 0 0 / 24%)',
    '&:hover': {
        backgroundColor: '#f8e42f',
    }
});

export { MainButton };

export default Button
