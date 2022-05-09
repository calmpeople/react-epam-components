import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import './styles.css';

function MovieList() {
    const movieArray = [
        {
            title: 'Pulp Fiction',
            description: 'Action & Adventure',
            year: '2004',
            id: 1
        },
        {
            title: 'Bohemian Rhapsody',
            description: 'Drama, Biography, Music',
            year: '2003',
            id: 2
        },
        {
            title: 'Kill Bill: Vol 2',
            description: 'Oscar winning Movie',
            year: '1994',
            id: 3
        },
        {
            title: 'Avengers: War of Infinity',
            description: 'Action & Adventure',
            year: '2004',
            id: 4
        },
        {
            title: 'Inception',
            description: 'Action & Adventure',
            year: '2003',
            id: 5
        },
        {
            title: 'Reservoir dogs',
            description: 'Oscar winning Movie',
            year: '1994',
            id: 6
        }
    ];
    const movieArrayComponents = movieArray.map(item => <MovieItem key={item.id} item={item}></MovieItem>);
    return (
        <div className='movie-list'>
            {movieArrayComponents}
        </div>
    )
}

export default MovieList;