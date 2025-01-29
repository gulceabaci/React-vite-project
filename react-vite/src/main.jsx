import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize:"30px",
    textTransform: "uppercase",
    textAlign: "center"
  }
  return <h1 style={style}>Header</h1>;
}
function ProductList() {
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

  const items = [
    {
      "image" : "../public/img/Iphone16Pro.jpeg",
      "title" : "Iphone 16 Pro",
      "decription" : "The iPhone 16 Pro is a smartphone designed, developed, and marketed by Apple Inc. It is the fourteenth generation of the iPhone, succeeding the iPhone 15 Pro and iPhone 15 Pro Max, and was announced on September 14, 2022, with pre-orders beginning on September 17, 2022, and official release on September 24, 2022.",
      "price" : 110000,
      is_active: false
    },
    {
      "image" : "../public/img/Iphone11.jpeg",
      "title" : "Iphone 11",
      "decription" : "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of the iPhone, succeeding the iPhone XS and XS Max. It was unveiled on September 10, 2019, alongside the higher-end iPhone 11 Pro and iPhone 11 Pro Max.",
      "price" : 60000,
      is_active: true
    },
    {
      "image" : "../public/img/HuwaiP40.jpeg",
      "title" : "Huwai P40",
      "decription" : "The Huawei P40 is a line of Android-based smartphones developed by Huawei as part of the P series. It was announced in March 2020 alongside the Huawei P40 Pro and Huawei P40 Pro+, and was Huawei's first flagship series to not include Google Mobile Services.",
      "price" : 50000,
      is_active: true
    },
    {
      "image" : "../public/img/SamsungS23.jpeg",
      "title" : "Samsung S23",
      "decription" : "The Samsung Galaxy S23 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics. The Galaxy S23 series is a successor to the Galaxy S22 series and was unveiled on 9 February 2023.",
      "price" : 100000,
      is_active: false
    },
  ];  

  //const items = [];

  return (
    <>
      <h2 className="title">Product List</h2>
      {items.length > 0 ? (
        <div id="product-list">
          {items.map((item, index) => (
            <Product key={index} productObj={item} />
          ))}
        </div>
      ) : (
        <p>Şu anda satışta olan ürünümüz yoktur.</p>
      )}
    </>
  );
}

function Product({ productObj }) {
  if(!productObj.is_active) return null;
  return (
    <>
      <img src={productObj.image} alt="mobile phone" />
      <h2>{productObj.title}</h2>
      <p>{productObj.decription}</p>
      <span className={productObj.price < 100000 ? "discount" : "price"}>{productObj.price}</span>
    </>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz.</p>
      ) : (
        <p>Şu an kapalıyız. Açılış saatimiz {openHour}</p>
      )}
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
