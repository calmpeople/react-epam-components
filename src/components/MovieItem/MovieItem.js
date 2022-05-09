import React from "react";
import './styles.css';

function MovieItem(props) {
    return (
        <div className='movie-item'>
            <div className='item-info'>
                <div className='item-title'>
                    {props.item.title}
                </div>
                <div className='item-description'>
                    {props.item.description}
                </div>
            </div>
            <div className='item-year'>
                {props.item.year}
            </div>
        </div>
    )
}

export default MovieItem;