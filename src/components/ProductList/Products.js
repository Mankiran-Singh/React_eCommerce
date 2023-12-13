import ProductDetails from "./ProductDetails";

function Products(data){
  console.log(data) 
  return (
     <li className="list-group-item">
       <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
         <div className="media-body order-2 order-lg-1">
           <h5 className="mt-0 font-weight-bold mb-2">{data.name}</h5>
           <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
           <ProductDetails props={data}/>
         </div>
         <img src={(data.img)} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
       </div>
     </li>
   )
}

export default Products;