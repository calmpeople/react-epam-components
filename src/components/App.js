import React, {Component} from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import MovieList from "./MovieList/MovieList";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import './common-styles.css';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <MainContent>
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
                </MainContent>
                <Footer>
                    <p>
                        <strong>netflix</strong>roulette
                    </p>
                </Footer>
            </>
        )
    }
}

export default App;