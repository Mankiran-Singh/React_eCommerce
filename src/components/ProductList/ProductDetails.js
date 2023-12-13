import React, {useState} from "react";
import Button from "./Button";

// let isAvailable='Available'


function ProductDetails(data){
    console.log("product detail component executed")
    let badgeClass='badge-margin-left-240 badge';
    badgeClass = data.props.isAvailable ? 'bg-success' : 'bg-danger';

    let [productsCount, updateCount]=useState(0)

    function displayProductCount(){
      return productsCount>0 ? productsCount :'Zero'
    }
    
    let incrementProductCount=function(){
        // productsCount++;
        updateCount(++productsCount);
    }
    let decrementProductCount=function(){
        if(productsCount<0){
            productsCount=0
        }
        updateCount(--productsCount);
    }
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={ {marginRight:30} }>${data.props.price}</h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span style={ { padding: "8px 14px", fontSize:13} }>
                {displayProductCount()}
            </span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{data.props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
  )
}

export default ProductDetails;