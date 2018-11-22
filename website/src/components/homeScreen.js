import React from 'react';
import NavbarPage from './navbar';
import './components.css';
import DogCard from "./DogCard";

class HomeScreen extends React.Component {
    render(){
        const list = ['A', 'B', 'C', 'D', 'E'];

        return(
            <div>
                <NavbarPage />
                <div className='component'>
                    {
                        list.map((movie, i) => {
                            return (
                                <DogCard key={i} name={movie} rating={movie.rating}
                                         fav={movie.fav} background={movie.backgorund}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default HomeScreen;