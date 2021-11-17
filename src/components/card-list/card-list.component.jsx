import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map((monster, index) => {
                return (
                    <Card key={monster.id} monster={monster} />

                )
            })
        }
    </div>
)
