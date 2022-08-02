import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import './Kids.css';
import { Link } from "react-router-dom"
const Kids = ({ products }) => {

    const filtered = products.filter(obj => {
        return obj.category === 'kids';
    });

    console.log(filtered)
    return (
        <div>
            {filtered.map(product => {
                //   <ProductDetailsPage product={product} index={i}/>
                return (
                    <div className="user-setting">
                        <div className='column' key={product.id}>
                            <h2><Link to={`/kids/${product.id}/`}>{product.brand}</Link></h2>
                            <h3>New Season</h3>
                            <h4>$ {product.price}</h4>
                            <img src={product.image2} alt="" />
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


export default Kids