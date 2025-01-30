import { items } from '../data';

export default function Main() {

    let index =0;
    let item = items[index];

    function handleNextClick() {
        index = index + 1;
    }

    function handlePreviousClick() {
        index = index - 1;
    }

    return(
      <>
        <button onClick={ handleNextClick }>Next</button>    
        <button onClick={ handlePreviousClick }>Previous</button>

        <h2>
            <i> {item.title} </i> {item.price} TL
        </h2>
        <h3>
            {index + 1} of {items.length}
        </h3>
        <img src={item.image} alt={item.title} />
        <p> {item.description} </p>
      </>
    )

}