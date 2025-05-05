import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewProducts() {
  const [products, setProducts] = useState([]);

  const getAllProducts =()=>{
    axios.get("http://localhost:7000/products")
         .then(res=>{
             if(res.status===200)
             {
               setProducts(res.data);
             }
         })
  }
  useEffect(getAllProducts , []);

  function deleteProduct(id){

    axios.delete(`http://localhost:7000/products/${id}`)
    .then(res=>{
      if(res.status===200)
        {
          alert("delete successfully")
          getAllProducts();
        }
    })
    
   
  }

  return (
    <div className='d-flex justify-content-center p-2'>
        
    <table className='table table-dark mt-2'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Is Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((prod, index) => (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.productName}</td>
                <td>{prod.category}</td>
                <td>{prod.description}</td>
                <td>{prod.supplier}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td> <input type='checkbox' className='form-check-input' checked={prod.instock} readOnly/></td>
                  <td> 
                      <button className='btn btn-danger' onClick={()=>deleteProduct(prod.id)} >
                            <i className="bi bi-trash3-fill"></i>
                      </button>
                      &nbsp;
                     <Link className='btn btn-primary' to={`/edit/${prod.id}`}> 
                          <i className="bi bi-pen-fill"></i>
                      </Link>
                    </td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ViewProducts;
