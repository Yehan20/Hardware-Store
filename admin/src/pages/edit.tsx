import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { getSingleProduct } from '../slices/productSlice';

const Edit = () => {
    const {id} = useParams();
    const {singleProduct} = useAppSelector((state)=>state.Products)
    const dispatch = useAppDispatch();

    useEffect(()=>{
      dispatch(getSingleProduct(id as string))
    },[])
    console.log(singleProduct)
  return (
    <div className="container update">
       <h2>Edit Product</h2>
       {
        singleProduct.name && (
           <div className='edit-product'>
               <div className="profile">
                  <div>
                    <img src={singleProduct.img} alt={singleProduct.name} />
                    <h3>{singleProduct.name}</h3>
                  </div>

                  <p>id : {singleProduct._id}</p>
                  <p> රු: {singleProduct.price}</p>
                  {singleProduct.inStock?<p>In Stock</p>:""}
                         
               </div>
               <div className="edit-info">
                  <form action="">
                    <div className="col">
                      <div>
                          <label htmlFor="name">Name</label>
                          <input type="text" value={singleProduct.name} />
                        </div>
                        <div>
                          <label htmlFor="desc">Desc</label>
                          <textarea  id="desc"  value={singleProduct.desc}></textarea>
                        </div>
                        <div>
                          <label htmlFor='price'>Price</label>
                          <input type="number" value={singleProduct.price} />
                        </div>
                        <div>
                        <select name="" id="">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </div>
                    </div>
                    <div className="col">
                       <img src={singleProduct.img} alt={singleProduct.name} />
                       <button>Update</button>
                    </div>

                  </form>
               </div>
           </div>
        )
       }
    </div>
  )
}

export default Edit