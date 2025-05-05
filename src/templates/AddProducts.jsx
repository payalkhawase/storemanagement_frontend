import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function AddProducts() {
    
    const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm();

    function saveProducts(products) {

        axios.post('http://localhost:7000/products',products).then(
            response=>{
                if(response.status==201){
                    alert("product is successfully stored in store app...!")
                    reset();
                }
                else{
                    alert("something went wrong...!")
                }
            }
        ).catch(error=>{
            console.log(error)
            alert("something went wrong")
        })
    }
  return (
    <div className='d-flex justify-content-center'>
        <div className='card bg-info w-50 mt-2 p-3'>
             <h1 className='text-center fs-3'>Add Product Here</h1>
        <form onSubmit={handleSubmit(saveProducts)}>
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

export default AddProducts
