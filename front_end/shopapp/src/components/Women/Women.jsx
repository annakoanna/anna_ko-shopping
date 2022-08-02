
import './Women.css';
import React from "react"
const Women = ({ products }) => {

    // const filtered = products.filter(obj => {
    //     return obj.category === 'women';
    // });

    // console.log(filtered)
    // return (
    //     <div>
    //         {filtered.map(product => {
    //             //   <ProductDetailsPage product={product} index={i}/>
    //             return (
    //                 <div className="user-setting">
    //                     <div className='column' key={product.id}>
    //                         <h2><Link to={`/women/${product.id}/`}>{product.brand}</Link></h2>
    // <h3>New Season</h3>
    //                         <h4>$ {product.price}</h4>
    //                         <img src={product.image2} alt="" />

    

    
    //                         </div>
    //                         <div>

    //                         </div>
    //                     </div>
    //                 );
    //             })}
    //             <div className="dummy" />
    //             <div className="dummy" />
    //         </div>
    //     );
    // }





    return (
        <>
            <div className="product-grid">
                <div className="column">
                    {/* <Link to='women'>
                      <Button buttonType='inverted'>Shop Women</Button>
                  </Link> */}

                    <img src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670830/data/c155d53e0c53cd51241840519c5f11f9/1x1_two-columns/637/data.jpeg' alt="" />
                    <h4>$500</h4>

                </div>
                <div className="column">
                    {/* <Link to="men"> */}
                    {/* <Button buttonType='inverted'>Shop Men</Button>
                  </Link> */}

                    <img src="https://crfashionbook.com/wp-content/uploads/2022/03/CR-5_V1-e1646507831157.jpg" alt="" />
                    <h4>$500</h4>
                </div>
                <div className="column">
                    {/* <Link to="kids">
                      <Button buttonType='inverted'>Shop Kids</Button>
                  </Link> */}

                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3671646/data/c1d9914c4cdc1bdcbeacd0bf27753288/1x1_messaging-side/637/data.jpeg" alt="" />
                    <h4>$700</h4>

                </div>

                {/* <Women />
          <Men />
          <Kids /> */}
                <div className="dummy" />
            </div>

        </>
    );
}
export default Women
