import React from 'react';
import NavbarPage from './navbar';
import './components.css';
import DogCard from "./DogCard";
import { Col, Fa, FormInline } from "mdbreact";

class HomeScreen extends React.Component {
    render(){
        // const list = ['A', 'B', 'C', 'D', 'E'];

        return(
            <div>
                <NavbarPage />

                {/* Busca */}
                <Col>
                    <FormInline className="md-form">
                        <Fa icon="search" />
                        <input
                            className="form-control form-control-sm ml-3 w-75"
                            type="text"
                            placeholder="Busca"
                            aria-label="Busca"
                        />
                    </FormInline>
                </Col>

                {/* Cards */}
                <div className='component'>
                    <DogCard name="Tobias" idade="3 anos"/>
                    <DogCard name="Willyanderson" idade="4 anos"/>
                    <DogCard name="Buzz" idade="4 anos"/>
                    <DogCard name="Thor" idade="5 anos"/>

                    {/*{*/}
                        {/*list.map((movie, i) => {*/}
                            {/*return (*/}
                                {/*<DogCard key={i} name={movie} rating={movie.rating}*/}
                                         {/*fav={movie.fav} background={movie.backgorund}/>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                </div>
            </div>
        );
    }
}

export default HomeScreen;