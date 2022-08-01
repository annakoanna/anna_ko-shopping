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
                    <div className="user-setting">
                        <div key={product.id}>
                            <h4><Link to={`/men/${product.id}/`}>{product.brand}</Link></h4>
                            <h4>$ {product.price}</h4>
                            <h4> {product.description}</h4>

                            {/* <h4>{product.cloth_size}</h4> */}

                            {/* <h4>{product.name}</h4> */}
                        </div>
                    </div>
                );
            })}
            <div className="dummy" />
        </div>
    );
}


export default Men