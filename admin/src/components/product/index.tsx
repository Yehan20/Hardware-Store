import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa'
import { useAppDispatch } from '../../hooks/redux_selectors';
import { deleteProduct } from '../../slices/productSlice';
import axios from 'axios';

interface ProductInterface{
  product:{
    _id:string;
    name:string;
    category:string;
    price:number;
    inStock:boolean;
    img:string;
  }

}
const URL  =  'https://toolandservice.onrender.com/delete';

const Product:React.FC<ProductInterface>= ({product}) => {
  const dispatch = useAppDispatch();
  const handleDelete = async()=>{
     const Token = localStorage.getItem('adminToken');
     dispatch(deleteProduct(product._id))
     const deleted=await axios.delete(`${URL}/${product._id}`,{
       headers:{
         'Authorization':`Bearer ${Token}`
       }
     })
     console.log(deleted);
  }
  return (
     <tr>
       <td><input type="checkbox" name="product" /></td>
       <td>
        <div className='td-flex'>
        <img src={product.img} alt={product.name} /> <span>{product.name}</span> 
        </div>
        </td>
       <td>{product.category}</td>
       <td>{product.price}</td>
       <td>{product.inStock?'Yes':'No'}</td>
       <td><Link className='edit' to={`/edit/${product._id}`}>Edit</Link>
           <button onClick={handleDelete}><FaTrashAlt color='red'/></button>
       </td>
     </tr>
  )
}

export default Product