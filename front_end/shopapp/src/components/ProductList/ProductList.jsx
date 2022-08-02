import './ProductList.css';
const ProductList=({products})=> {
  
  const filtered = products.filter(obj => {
    return obj.category === 'men';
  });

  console.log(filtered)
  return (
    <div>
      {filtered.map(product => {
        return (
          <div className="user-setting">
          <div key={product.id}>
            <h4>{product.brand}</h4>
            <h4>$ {product.price}</h4>
            <h4> {product.descriprion}</h4>
            </div>

            
          </div>
        );
      })}
    </div>
  );
}

  
   export default ProductList