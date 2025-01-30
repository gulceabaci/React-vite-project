import { useState } from 'react';
import { items } from '../data';

export default function Main() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    //let index =0;
    let item = items[index];

    function handlePreviousClick(e) {
        //index = index - 1;
        if(index > 0) {
            setIndex(index - 1);
        }
        else {
            setIndex(items.length - 1);
        }
    }

    function handleNextClick() {
        //index = index + 1;
        if(index < items.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }

    
    return(
      <>
        <button onClick={ handlePreviousClick }>Previous</button>
        <button onClick={ handleNextClick }>Next</button>    
        
        <h2>
            <i> {item.title} </i> {item.price} TL
        </h2>
        <h3>
            {index + 1} of {items.length}
        </h3>
        <button onClick={handleMoreClick} >{showMore ? "Hide" : "Show"} details</button>
        <br />
        <img src={item.image} alt={item.title} />
        {showMore && <p> {item.description} </p>}
      </>
    )

}