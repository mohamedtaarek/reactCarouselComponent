import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './components/Carousel';
import {carouselData} from './components/carouselData'
const App = ()=>{
    return(
        <div>
            <Carousel slides={carouselData}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);