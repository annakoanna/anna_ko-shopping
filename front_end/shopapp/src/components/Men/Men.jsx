import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import './Men.css';
import { Link } from "react-router-dom"
const Men = ({ products }) => {

    
                           
  const filtered = products.filter(obj => {
    return obj.category === 'men';
});

console.log(filtered)
return (
    <div>
        {filtered.map(product => {
            //   <ProductDetailsPage product={product} index={i}/>
            return (
                    <div className='column' key={product.id}>
                <div className="user-setting">
                        <h1><Link to={`/men/${product.id}/`}>{product.brand}</Link></h1>
                  <h3>New Season</h3>
                        <h4>$ {product.price}</h4>
                        
                        <img src={product.image2} alt="" />

                        {/* <h4>{product.cloth_size}</h4> */}

                        {/* <h4>{product.name}</h4> */}
                    </div>
                    <div>

                    </div>
                </div>
            );
        })}
        <div className="dummy" />
        <div className="dummy" />
    </div>
);
}



export default Men