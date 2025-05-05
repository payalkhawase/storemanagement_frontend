import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


function EditProducts() {

   const {prodId}=useParams();
   const {register,handleSubmit,reset,setValue}=useForm();

   const getEditData=()=>{

    axios.get(`http://localhost:7000/products/${prodId}`)
    .then(res=>{
        if(res.status===200)
        {
            for(let prop in res.data)
                setValue(prop,res.data[prop])
        }
    })
   }
   useEffect(getEditData,[])

   function editProduct(data) {
    
    axios.put(`http://localhost:7000/products/${prodId}`,data)
    .then(res=>{
        if(res.status===200){

            alert("Product updated....!")
                    reset();
        }
    })
   }

  return (
   
    <div className='d-flex justify-content-center'>
    <div className='card bg-warning w-50 mt-2 p-3'>
         <h1 className='text-center fs-3'>Update Product Here</h1>
        
        <form onSubmit={handleSubmit(editProduct)}>
               <div className='mb-3'>
                <label htmlFor='prodName' className='text-dark form-label'>Enter Product Name:-</label>
                <input type='text' className='form-control' id='prodName' {...register("productName")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='category' className='text-dark form-label'>Enter Category Name:-</label>
                <input type='text' className='form-control' id='category' {...register("category")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='desc' className='text-dark form-label'>Enter Description Name:-</label>
                <input type='text' className='form-control' id='desc' {...register("description")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='supp' className='text-dark form-label'>Enter Supplier Name:-</label>
                <input type='text' className='form-control' id='supp' {...register("supplier")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='price' className='text-dark form-label'>Enter Price:-</label>
                <input type='text' className='form-control' id='price' {...register("price")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='quant' className='text-dark form-label'>Enter Quantity:-</label>
                <input type='text' className='form-control' id='quant' {...register("quantity")}/>
               </div>
               <div className='mb-3'>
                <label htmlFor='stock' className='text-dark form-label'>Is Product In Stock?</label>
                <input type='checkbox' className='form-check-input' id='stock' {...register("instock")}/>
               </div>
               <div className='text-center'>
                <button type='submit' className='btn btn-success w-25'>Submit</button>
               </div>
               
        </form>
      </div>
      
      </div>
  )
}

export default EditProducts
