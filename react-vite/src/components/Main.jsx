import { items } from './data.js';

export default function Main() {

    let index =0;
    let item = items[index];

    function handleNextClick() {
        console.log('Next button clicked')
    }

    function handlePreviousClick() {
        console.log('Previous button clicked')
    }

    return(
      <>
        <button onClick={ handleNextClick }>Next</button>    
        <button onClick={ handlePreviousClick }>Previous</button>

        <h2>
            <i> {item.title} </i> {item.price}
        </h2>
        <h3>
            {index + 1} of {items.length}
        </h3>
        <img src={item.image} alt={item.title} />
        <p> {item.description} </p>
      </>
    )

}