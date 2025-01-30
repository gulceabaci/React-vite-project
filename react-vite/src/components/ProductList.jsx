import { items } from '../data';
import Product from './Product';

export default function ProductList() {
  /*const ImgUrl= "../public/img/Iphone16Pro.jpeg";
  const title= "Iphone 16 Pro";
  const decription= "The iPhone 16 Pro is a smartphone designed, developed, and marketed by Apple Inc. It is the fourteenth generation of the iPhone, succeeding the iPhone 15 Pro and iPhone 15 Pro Max, and was announced on September 14, 2022, with pre-orders beginning on September 17, 2022, and official release on September 24, 2022.";
  const price= 110000;*/
  /*const product_item = {
    "image" : "../public/img/Iphone16Pro.jpeg",
    "title" : "Iphone 16 Pro",
    "decription" : "The iPhone 16 Pro is a smartphone designed, developed, and marketed by Apple Inc. It is the fourteenth generation of the iPhone, succeeding the iPhone 15 Pro and iPhone 15 Pro Max, and was announced on September 14, 2022, with pre-orders beginning on September 17, 2022, and official release on September 24, 2022.",
    "price" : 110000 
  };*/

  return (
    <>
      {items.length > 0 ? (
        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="product-list">
          {items.map((item, index) => (
            <div className="col" key={index}>
              <Product productObj={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>Şu anda satışta olan ürünümüz yoktur.</p>
      )}
    </>
  );
}