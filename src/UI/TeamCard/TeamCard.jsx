import React from 'react'
import Classes from './TeamCard.module.scss'

const TeamCard = (props) => {
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
        </div>
    )
}

export default TeamCard
