
export default function Product({ productObj }) {
    
    if(!productObj.is_active) return null;
    return (
      <div className="card shadow-sm">
        <img className="card-img-top p-2 p-md-3 border-bottom" src={productObj.image} alt="mobile phone" />
        <div className="card-body">
          <h2 className="card-title">{productObj.title}</h2>
          <p className="card-text">{productObj.decription}</p>
          <span className="badge text-bg-success">{productObj.price} TL</span>
        </div>
      </div>
    );
  }