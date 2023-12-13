import React from 'react';
import './app.css';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';
function App(){
   return (
    <div>
      <CreateProduct/>
      <ProductList/>
    </div>
   )
}
export default App;