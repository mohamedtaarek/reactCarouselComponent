import React,{useState} from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import {useSwipeable} from 'react-swipeable';
import './carousel.css'
function Carousel({slides}) {
    const [current,setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = ()=>{
        setCurrent((current === length-1)? 0: current+1 );
    }
    const prevSlide = ()=>{
        setCurrent((current === 0)? length - 1: current - 1 );
    }
    const handlers = useSwipeable({
        onSwipedLeft: ()=>{nextSlide()},
        onSwipedRight: ()=>{prevSlide()}
    })
    if(!Array.isArray(slides)||slides.length <=0){
        return null;
    }
    return (
        <section className='Carousel' {...handlers}>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            {slides.map((component,index)=>{
                return (
                    <div className={index === current? 'slide active':'slide'} key={"carousel-key-"+(index+1)}>
                        {index === current && (
                        <img src={component.image} alt={"carousel-component-"+(index+1)} key={"carousel-component-"+(index+1)} className="image"/>
                        )}
                    </div>
                )
            })}

            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        </section>
    )
}

export default Carousel
