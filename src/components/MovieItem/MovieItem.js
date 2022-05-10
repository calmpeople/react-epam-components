import React from "react";
import './styles.css';
import PropTypes from 'prop-types';

function MovieItem(props) {
    return (
        <div className='movie-item'>
            <div className='item-info'>
                <div className='item-title'>
                    {props.title}
                </div>
                <div className='item-description'>
                    {props.description}
                </div>
            </div>
            <div className='item-year'>
                {props.year}
            </div>
        </div>
    )
}

export default MovieItem;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    year: PropTypes.string
}