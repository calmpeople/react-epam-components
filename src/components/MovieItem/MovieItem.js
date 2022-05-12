import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import imageMovie from './image-1.jpg';

function MovieItem(props) {
    return (
        <div className='movie-item'>
            <div className='item-image'>
                <img src={imageMovie} alt=""/>
            </div>
            <div className='item-text'>
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
        </div>
    )
}

export default MovieItem;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    year: PropTypes.string
}