import React from 'react'
import Classes from './Card.module.scss'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twiter.svg'
import star from '../../assets/star.svg'
// import { Card, CardHeader, CardContent, Grid } from '@mui/material'

const Card = (props) => {
    const { image, alter, description } = props
    return (
        <div className={Classes.Card}>
            <div className={Classes.header}>
                <div className={Classes.circle}>
                    <div className={Classes.img}>
                        <img src={image} alt={alter} />
                    </div>
                </div>
            </div>
            {description}
            <div className={Classes.footer}>
                <img src={facebook} alt="facebook" width="40" height="40" />
                <img src={twitter} alt="twitter" width="40" height="40" />
                <img src={star} alt="facebook" width="40" height="40" />
            </div>
        </div>
    )
}

export default Card
